import { experience } from '@/content/experience';

export function Experience() {
  return (
    <section id="experience" className="bg-white py-24 text-charcoal">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-display text-4xl font-bold text-charcoal">Experience</h2>
          <p className="mx-auto max-w-2xl text-base text-medium-gray">
            A timeline of roles leading strategic growth, operational excellence, and team enablement across fintech
            organizations.
          </p>
        </div>
        <div className="relative border-l border-light-gray pl-8">
          <span className="absolute left-0 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-orange to-lime" aria-hidden />
          <div className="space-y-10">
            {experience.map((item) => (
              <div key={item.company} className="relative rounded-3xl border border-light-gray bg-light-gray/50 p-8">
                <span className="absolute -left-12 top-8 h-3 w-3 -translate-x-1/2 rounded-full border-4 border-white bg-orange" />
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal">
                      {item.company}{' '}
                      <span className="text-orange">{item.title}</span>
                    </h3>
                  </div>
                  <span className="text-sm font-medium uppercase tracking-wide text-medium-gray">{item.date}</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-medium-gray">
                  {item.description.map((bullet) => (
                    <li key={bullet} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="/Katie-Kelly-Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal transition hover:brightness-90"
          >
            Download Resume
            <span className="text-lg">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
