// Operator-only outreach material for /outreach. Not prospect-facing.
// Facts below were checked against the original site (allinremodel.com) on 2026-10-25.

export const demoUrl = 'https://all-in-remodeling.vercel.app';
export const originalUrl = 'https://www.allinremodel.com/';
export const checkedOn = '2026-10-25';

export const snapshot: ReadonlyArray<readonly [string, string]> = [
  ['Business', 'All In Remodeling (Rialto, CA)'],
  ['Trade', 'Kitchen and bathroom remodeling, flooring, interior/exterior painting, plumbing, handyman, doors and windows, electrical (original site services list)'],
  ['Mailing address', 'P.O. Box 2529, Rialto, CA 92377 (original site footer). No street address published'],
  ['Phone', '(909) 267-8543 (original site header and footer, tel: link)'],
  ['Email', 'info@allinremodel.com (original site footer and mailto: link on home, About, Reviews and Contact pages)'],
  ['Hours', 'Mon - Sun 7:00 am - 5:00 pm (original site header)'],
  ['License', '#1099490 shown in the original site footer. Status not re-checked on CSLB'],
  ['Owner', 'Abraham Amouri per a customer review on the original site (the review spells it both "Amoui" and "Amouri"). No first-party About-page owner statement was found'],
  ['Current site', 'Housecall Pro hosted site ("Powered by Housecall Pro" in footer); Book Now opens a popup form at /form-popup'],
];

export const links = [
  { label: 'Original site', href: originalUrl },
  { label: 'Deployed demo', href: demoUrl },
  { label: 'GitHub repo', href: 'https://github.com/Novenworks/All-In-Remodeling' },
  { label: 'CSLB license lookup', href: 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx' },
] as const;

export const contact = {
  recipient: 'info@allinremodel.com',
  phone: '(909) 267-8543',
  greetingName: 'Abraham' as string | null,
  bestChannel: 'Email to info@allinremodel.com (first-party, published). Phone/text (909) 267-8543 as follow-up.',
  greetingNote:
    'Owner name comes from a customer review on the original site, not an owner-written page, and the spelling varies. Confirm the spelling before using "Hi Abraham," or open with "Hi,".',
};

// Every contact candidate found, with source, date and first/third-party status.
export const candidates: ReadonlyArray<{ kind: string; value: string; source: string; party: string }> = [
  { kind: 'Email', value: 'info@allinremodel.com', source: 'https://www.allinremodel.com/ (footer mailto:), also /contact-us, /about-us, /reviews', party: 'First-party' },
  { kind: 'Phone', value: '(909) 267-8543', source: 'https://www.allinremodel.com/ (header and footer tel:9092678543, also /contact-us, /about-us, /reviews)', party: 'First-party' },
  { kind: 'Mailing address', value: 'P.O. Box 2529, Rialto, CA 92377', source: 'https://www.allinremodel.com/ footer', party: 'First-party' },
  { kind: 'Contact form', value: 'Book Now popup form', source: 'https://www.allinremodel.com/form-popup (linked from the Book Now buttons)', party: 'First-party' },
  { kind: 'Name', value: 'Abraham Amouri (owner)', source: 'Customer review on https://www.allinremodel.com/ ("Amoui" / "Amouri")', party: 'First-party page, third-party text (a customer review)' },
  { kind: 'Facebook', value: 'facebook.com/61567177816388', source: 'Linked from https://www.allinremodel.com/. Page itself returned a 302 to automation and was not read', party: 'First-party link, content not checked' },
  { kind: 'Yelp', value: 'yelp.com/biz/all-in-remodeling-rialto', source: 'Linked from https://www.allinremodel.com/. Yelp returned 403 to automation and was not read', party: 'First-party link, content not checked' },
  { kind: 'Google Business Profile', value: 'All In Remodeling (Maps link)', source: 'Linked from https://www.allinremodel.com/. Places search returned no result today and the listing was not read', party: 'First-party link, content not checked' },
];

// Each item was seen on the original site on 2026-10-25.
export const observations = [
  'The project gallery has roughly 80 photos, but the gallery image links are empty and the "View more" button has no target, so photos do not lead anywhere.',
  'Several promo blocks render leftover placeholder text ("Empty white space.", "White background.") next to "10% Off Your First Service" and "Fast Same-Day Emergency Repairs".',
  'Only one customer testimonial is shown on the homepage, and it spells the owner both "Amoui" and "Amouri".',
  'The footer lists a "Chat with us" option with no visible link.',
  'The owner is named only inside a customer review; there is no owner story or About-page statement up front.',
  'Strong facts (license number, hours, email, service cities) sit in the header and footer rather than in a clear first screen.',
];

export const improvements = [
  'Real project photos presented large, grouped by kitchens, bathrooms, outdoor and whole-home, instead of a small gallery.',
  'A clear 5-step process (consultation, estimate, permits, construction, final walkthrough) taken from the research notes.',
  'Before/after slider for kitchen and bath transformations.',
  'Owner presented up front, with the phone number in the header and a sticky call action on mobile.',
  'Estimate request form with phone and city, plus service-area and review section.',
];

export const talkingPoints = [
  'Real project photos are the best asset on the current site and are hard to explore. The demo puts them first.',
  'A few promo blocks on the current homepage show leftover placeholder text. Friendly heads-up, easy to fix.',
  'The five-step process makes the first call less intimidating.',
];

export const hooks = [
  'Hours of Mon - Sun, 7:00 am - 5:00 pm are published, which is rare for a small remodeler.',
  'Customer review praising the owner for spearheading the whole project.',
  'Wide service area: Fontana, Mentone, Ontario, Rancho Cucamonga, Redlands, Rialto, Riverside, San Bernardino, Yucaipa.',
];

export const doNotSay = [
  'No prices, timelines, or promises about leads, rankings, calls, or conversions.',
  'Do not knock the current site or its platform. Frame the placeholder text and empty gallery links as a heads-up.',
  'Do not imply Novenworks was hired or that the demo is an official All In Remodeling site.',
  'Do not claim ownership of the project photos. They belong to All In Remodeling.',
  'Do not state the license is active until CSLB is checked.',
  'Do not describe the demo form as live. It does not send messages yet.',
];

export const subjectLines = [
  'Made something for All In Remodeling',
  'An idea for the All In Remodeling website',
  'Quick note about your project photos online',
];

export const coldEmail = `Hi Abraham,

I came across All In Remodeling and spent some time on allinremodel.com. You have a lot of real kitchen, bath and pergola work, and a customer even calls you out by name for running the whole project.

One small thing I noticed: a few promo blocks on the homepage show placeholder text like "Empty white space.", and the gallery photos do not open anywhere, so your best work is hard to look through.

I had an idea for how I would present the business, so I built a version instead of sending a list of suggestions.

${demoUrl}

Thought you might be curious to see it. If you like the direction, I can walk you through what I changed and why.

Vincent
Novenworks`;

export const followUp = `Hi Abraham,

Just bumping this once in case it got buried. I put together a version of the All In Remodeling site using your project photos and wanted to make sure you saw it.

${demoUrl}

No pressure either way.

Vincent
Novenworks`;

export const phoneScript = `Hi, this is Vincent with Novenworks. Is Abraham available, or who would be the right person to talk to about the All In Remodeling website?

I put together a version of your site that puts your real kitchen, bath and pergola photos front and center, and I noticed a few small things on the current homepage I wanted to mention.

I sent the link to the info@ email. Happy to walk you through it whenever it's convenient. Thanks.`;

export const voicemail = `Hi, this is Vincent with Novenworks. I built a version of the All In Remodeling website that shows off your project photos and sent the link to info@allinremodel.com. No pressure, just wanted you to have it. Thanks.`;

export const stillToVerify = [
  'Owner name spelling (Amouri vs Amoui). Only a customer review names him on the original site.',
  'CSLB #1099490 status and licensee name (not checked in this pass).',
  'That the placeholder text and empty gallery links still show on the day of sending.',
  'Whether info@allinremodel.com is monitored, and whether a direct owner email exists.',
  'Facebook, Yelp and Google Business Profile contents (blocked or empty for automation on 2026-10-25). Hours and phone not cross-checked against them.',
  'The demo estimate form and contact modal show a confirmation message but do not send anything. Confirm before sending that this is acceptable, or do not describe the form as live.',
  'Demo footer carries a small "Speculative Redesign by Novenworks" credit. Demo facts taken from research notes (BBB standing, owner story, process steps) were not re-verified in this pass.',
];
