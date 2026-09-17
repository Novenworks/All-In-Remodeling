const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetProjectDir = 'c:\\Projects\\All-In-Remodeling';
const screenshotsDir = path.join(targetProjectDir, 'screenshots');
const demoAssetsDir = path.join(targetProjectDir, 'public', 'demo-assets');

if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });
if (!fs.existsSync(demoAssetsDir)) fs.mkdirSync(demoAssetsDir, { recursive: true });

async function runCapture() {
  console.log('Launching browser for responsive QA & capture...');
  const browser = await chromium.launch({ headless: true });

  const url = 'http://localhost:3030';

  // 1. Desktop Full Page (1440px)
  console.log('Capturing Desktop 1440px full page...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await desktopPage.waitForTimeout(2000);

  const desktopPngPath = path.join(screenshotsDir, 'desktop-full.png');
  await desktopPage.screenshot({ path: desktopPngPath, fullPage: true });
  console.log('Saved:', desktopPngPath);
  await desktopContext.close();

  // 2. Mobile Full Page (390px)
  console.log('Capturing Mobile 390px full page...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await mobilePage.waitForTimeout(2000);

  const mobilePngPath = path.join(screenshotsDir, 'mobile-full.png');
  await mobilePage.screenshot({ path: mobilePngPath, fullPage: true });
  console.log('Saved:', mobilePngPath);
  await mobileContext.close();

  // 3. Desktop Scroll Video (1440x900)
  console.log('Recording Desktop smooth scroll video...');
  const videoContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: {
      dir: screenshotsDir,
      size: { width: 1440, height: 900 },
    },
  });
  const videoPage = await videoContext.newPage();
  await videoPage.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await videoPage.waitForTimeout(1500);

  // Smooth scroll top to bottom over ~12-14 seconds
  const totalHeight = await videoPage.evaluate(() => document.body.scrollHeight);
  const steps = 100;
  const stepHeight = totalHeight / steps;
  for (let i = 0; i <= steps; i++) {
    await videoPage.evaluate((y) => window.scrollTo(0, y), i * stepHeight);
    await videoPage.waitForTimeout(70);
  }
  await videoPage.waitForTimeout(1500);

  // Scroll back to top smoothly
  for (let i = steps; i >= 0; i -= 3) {
    await videoPage.evaluate((y) => window.scrollTo(0, y), i * stepHeight);
    await videoPage.waitForTimeout(30);
  }
  await videoPage.waitForTimeout(1000);

  const video = videoPage.video();
  await videoContext.close();

  if (video) {
    const rawVideoPath = await video.path();
    const finalMp4Path = path.join(screenshotsDir, 'desktop-scroll.mp4');
    const finalGifPath = path.join(screenshotsDir, 'desktop-scroll.gif');

    try {
      console.log('Converting video with ffmpeg...');
      execSync('ffmpeg -y -i "' + rawVideoPath + '" -c:v libx264 -pix_fmt yuv420p -r 30 "' + finalMp4Path + '"', { stdio: 'inherit' });
      execSync('ffmpeg -y -i "' + finalMp4Path + '" -vf "fps=10,scale=960:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" "' + finalGifPath + '"', { stdio: 'inherit' });
      console.log('Generated MP4 and GIF successfully.');
    } catch (e) {
      console.log('ffmpeg normalization fallback:', e.message);
      if (fs.existsSync(rawVideoPath)) {
        fs.copyFileSync(rawVideoPath, finalMp4Path);
      }
    }
  }

  // Copy captures to public/demo-assets/
  const filesToCopy = [
    'desktop-full.png',
    'mobile-full.png',
    'desktop-scroll.mp4',
    'desktop-scroll.gif'
  ];

  filesToCopy.forEach(f => {
    const src = path.join(screenshotsDir, f);
    const dest = path.join(demoAssetsDir, f);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log('Copied to demo-assets:', f);
    }
  });

  await browser.close();
  console.log('QA & Capture completed successfully!');
}

runCapture().catch(console.error);
