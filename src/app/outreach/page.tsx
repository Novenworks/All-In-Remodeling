import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import {
  candidates,
  checkedOn,
  coldEmail,
  contact,
  doNotSay,
  followUp,
  hooks,
  improvements,
  links,
  observations,
  phoneScript,
  snapshot,
  stillToVerify,
  subjectLines,
  talkingPoints,
  voicemail,
} from '@/lib/outreach';

// Operator-only. Not linked from navigation, not in the sitemap, noindex/nofollow.
export const metadata: Metadata = {
  title: 'Outreach (internal)',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-slate-800 pt-6">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function List({ items, ordered = false }: { items: readonly string[]; ordered?: boolean }) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={`space-y-2.5 pl-5 leading-relaxed text-slate-300 ${ordered ? 'list-decimal' : 'list-disc'}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
  );
}

function Script({ text }: { text: string }) {
  return (
    <pre className="whitespace-pre-wrap break-words rounded-lg bg-slate-900 p-4 font-sans text-[16px] leading-relaxed text-slate-200 sm:p-5">
      {text}
    </pre>
  );
}

export default function OutreachPage() {
  return (
    <main className="bg-[#0a0e17] py-10 sm:py-14">
      <div className="mx-auto w-full max-w-4xl space-y-8 px-5 sm:px-8">
        <div>
          <p className="inline-block bg-orange-500 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-black">
            Operator outreach · internal · not prospect-facing
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">All In Remodeling</h1>
          <p className="mt-2 text-slate-400">Novenworks demo · original site checked {checkedOn}</p>
        </div>

        <Section title="Business snapshot">
          <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[9rem_1fr]">
            {snapshot.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="font-semibold text-white">{k}</dt>
                <dd className="text-slate-300">{v}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange-400 underline underline-offset-4">
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Contact block">
          <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[9rem_1fr]">
            <dt className="font-semibold text-white">Send to</dt>
            <dd className="break-all text-slate-300">{contact.recipient}</dd>
            <dt className="font-semibold text-white">Phone</dt>
            <dd className="text-slate-300">{contact.phone}</dd>
            <dt className="font-semibold text-white">Best channel</dt>
            <dd className="text-slate-300">{contact.bestChannel}</dd>
            <dt className="font-semibold text-white">Greeting</dt>
            <dd className="text-slate-300">{contact.greetingName ? `Hi ${contact.greetingName},` : 'Hi,'}</dd>
            <dt className="font-semibold text-white">Greeting note</dt>
            <dd className="text-slate-300">{contact.greetingNote}</dd>
          </dl>
          <h3 className="mt-6 text-lg font-semibold text-white">All candidates (checked {checkedOn})</h3>
          <ul className="mt-3 space-y-3">
            {candidates.map((c) => (
              <li key={c.kind + c.value} className="rounded-lg bg-slate-900 p-3 text-sm leading-relaxed text-slate-300">
                <span className="font-semibold text-white">{c.kind}:</span> <span className="break-all">{c.value}</span>
                <br />
                <span className="break-all">Source: {c.source}</span>
                <br />
                Status: {c.party}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={`Original-site observations (checked ${checkedOn})`}>
          <List items={observations} />
        </Section>

        <Section title="What the demo changes">
          <List items={improvements} />
        </Section>

        <Section title="Talking points">
          <List items={talkingPoints} ordered />
        </Section>

        <Section title="Personalization hooks">
          <List items={hooks} />
        </Section>

        <Section title="What not to say">
          <List items={doNotSay} />
        </Section>

        <Section title="Subject lines">
          <List items={subjectLines} ordered />
        </Section>

        <Section title="Cold email">
          <Script text={coldEmail} />
        </Section>

        <Section title="Follow-up">
          <Script text={followUp} />
        </Section>

        <Section title="Phone / text script">
          <Script text={phoneScript} />
        </Section>

        <Section title="Voicemail">
          <Script text={voicemail} />
        </Section>

        <Section title="Still to verify before sending">
          <List items={stillToVerify} />
        </Section>
      </div>
    </main>
  );
}
