import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Notice',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <main className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-emerald-500 mb-3">$ cat legal-notice.txt</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-12">Legal Notice</h1>

        <div className="space-y-10 text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">
              Information pursuant to § 5 TMG (German Telemedia Act)
            </h2>
            <p>Michael Fuchs</p>
            <p className="mt-2 text-zinc-500 italic">
              Wolfratshauser Str. 15
              <br />
              82335 Berg
              <br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">Contact</h2>
            <p>
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
            <h2 className="text-lg font-semibold text-zinc-200 mb-3">Disclaimer</h2>

            <h3 className="text-base font-semibold text-zinc-300 mb-2">Liability for Content</h3>
            <p className="text-sm mb-4">
              As a service provider, I am responsible for my own content on these pages in
              accordance with general laws pursuant to § 7 para. 1 TMG. However, pursuant to §§ 8 to
              10 TMG, I am not obligated to monitor transmitted or stored third-party information or
              to investigate circumstances that indicate illegal activity. Obligations to remove or
              block the use of information under general laws remain unaffected. Liability in this
              regard is only possible from the point in time at which a concrete infringement of the
              law becomes known. Upon becoming aware of any such violations, I will remove the
              relevant content immediately.
            </p>

            <h3 className="text-base font-semibold text-zinc-300 mb-2">Liability for Links</h3>
            <p className="text-sm mb-4">
              This website contains links to external third-party websites over whose content I have
              no control. I therefore cannot accept any liability for such third-party content. The
              respective provider or operator of the linked pages is always responsible for their
              content. The linked pages were checked for possible legal violations at the time of
              linking. No illegal content was apparent at the time of linking. However, permanent
              monitoring of the content of linked pages is not reasonable without concrete
              indication of a legal violation. Upon becoming aware of any such violations, I will
              remove the relevant links immediately.
            </p>

            <h3 className="text-base font-semibold text-zinc-300 mb-2">Copyright</h3>
            <p className="text-sm">
              The content and works created by the site operator on these pages are subject to
              German copyright law. Reproduction, editing, distribution, and any form of
              exploitation beyond the limits of copyright law require the written consent of the
              respective author or creator. Downloads and copies of this site are only permitted for
              private, non-commercial use. Where content on this site was not created by the
              operator, the copyrights of third parties are respected. Third-party content is
              identified as such. Should you nevertheless become aware of a copyright infringement,
              please notify me accordingly. Upon becoming aware of any such violations, I will
              remove the relevant content immediately.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
