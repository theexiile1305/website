import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-emerald-500 mb-3">$ cat privacy-policy.txt</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-12">Privacy Policy</h1>

        <div className="space-y-10 text-zinc-400 leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">1. Data Controller</h2>
            <p>
              The data controller within the meaning of the General Data Protection Regulation
              (GDPR) is:
            </p>
            <p className="mt-2">
              Michael Fuchs
              <br />
              Email:{' '}
              <a
                href="mailto:me@mfuchs.dev"
                className="text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                me@mfuchs.dev
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">2. What Data Is Processed?</h2>
            <p>
              This website does not use cookies, tracking, or any third-party analytics services. No
              personal data is actively collected or stored.
            </p>
            <p className="mt-3">
              When you visit this website, the hosting provider automatically records the following
              data in server log files for technical reasons:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-zinc-500">
              <li>IP address of the requesting device</li>
              <li>Date and time of the request</li>
              <li>Name and URL of the requested file</li>
              <li>Amount of data transferred</li>
              <li>Browser type and operating system</li>
              <li>Referrer URL (previously visited page)</li>
            </ul>
            <p className="mt-3">
              This data is processed solely to ensure the stable and secure operation of the
              website. It is not merged with other data sources. The legal basis is Art. 6 para. 1
              lit. f GDPR (legitimate interest in the secure and functional operation of the
              website).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">3. Hosting</h2>
            <p>
              This website is statically hosted. Server log files generated in the course of hosting
              are processed in accordance with the privacy policy of the respective hosting provider
              and deleted after no more than 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">4. External Links</h2>
            <p>
              This website contains links to external services such as LinkedIn and GitHub. When you
              click these links, you leave this website. The respective privacy policies of those
              external services apply to any data processing that occurs there. I have no influence
              over how third-party providers handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              5. Your Rights as a Data Subject
            </h2>
            <p>Under the GDPR, you have the following rights:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-zinc-500">
              <li>
                <span className="text-zinc-400">Right of access</span> (Art. 15 GDPR) – You may
                request information about the personal data stored about you.
              </li>
              <li>
                <span className="text-zinc-400">Right to rectification</span> (Art. 16 GDPR) – You
                may request the correction of inaccurate data.
              </li>
              <li>
                <span className="text-zinc-400">Right to erasure</span> (Art. 17 GDPR) – You may
                request the deletion of your data under certain conditions.
              </li>
              <li>
                <span className="text-zinc-400">Right to restriction of processing</span> (Art. 18
                GDPR)
              </li>
              <li>
                <span className="text-zinc-400">Right to data portability</span> (Art. 20 GDPR)
              </li>
              <li>
                <span className="text-zinc-400">Right to object</span> (Art. 21 GDPR) – You may
                object to the processing of your data.
              </li>
              <li>
                <span className="text-zinc-400">Right to lodge a complaint</span> with a supervisory
                authority (Art. 77 GDPR)
              </li>
            </ul>
            <p className="mt-3">
              To exercise your rights, please contact me by email:{' '}
              <a
                href="mailto:me@mfuchs.dev"
                className="text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                me@mfuchs.dev
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">6. Currency</h2>
            <p>
              This privacy policy is currently valid and was last updated in April 2026. As this
              website evolves or legal requirements change, it may be necessary to update this
              policy accordingly.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
