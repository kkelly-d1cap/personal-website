import { projects } from '@/content/projects';
import Link from 'next/link';

export function Work() {
  return (
    <section id="work" className="bg-white py-24 text-charcoal">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-script text-4xl">Featured Work</h2>
          <p className="mx-auto max-w-2xl text-base text-medium-gray">
            A snapshot of collaborative initiatives that delivered measurable impact across people, processes, and
            platforms.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-3xl border border-light-gray bg-light-gray/60 p-8 shadow-card transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex-1 space-y-4">
                <h3 className="font-script text-3xl text-charcoal">{project.title}</h3>
                <p className="text-sm leading-relaxed text-medium-gray">{project.description}</p>
              </div>
              <Link
                href={project.link}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-lime px-5 py-3 text-sm font-semibold text-charcoal transition group-hover:translate-x-1"
              >
                View Project
                <span className="ml-2 text-lg">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
