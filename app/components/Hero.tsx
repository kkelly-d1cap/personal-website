import Image from 'next/image';
import Link from 'next/link';
import { config } from '@/content/config';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-charcoal pt-32 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 md:flex-row md:items-center">
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-orange/70">
              <Image src="/profile.svg" alt="Katie Kelly" fill priority sizes="80px" className="object-cover" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Katie Kelly</p>
              <p className="text-sm uppercase tracking-[0.2em] text-orange">FinTech Operations Leader</p>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              {config.hero.headline}
            </h1>
            <p className="max-w-xl text-lg text-white/80 md:text-xl">
              {config.hero.subheadline}
            </p>
            <p className="max-w-xl text-lg font-medium text-white md:text-xl">
              <span className="rounded bg-orange/20 px-2 py-1 text-orange">
                {config.hero.valueProposition}
              </span>
            </p>
          </div>
          <form
            action="https://app.convertkit.com/forms/9999999/subscriptions"
            method="post"
            target="_blank"
            className="flex w-full max-w-lg flex-col gap-4 rounded-2xl bg-white/5 p-6 shadow-lg backdrop-blur md:flex-row md:items-center"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-full border border-white/20 bg-charcoal/60 px-6 py-3 text-base text-white placeholder:text-white/60 focus:border-orange focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full rounded-full bg-lime px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal transition hover:brightness-90 md:w-auto"
            >
              Subscribe
            </button>
          </form>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span>Prefer direct contact?</span>
            <Link href={`mailto:${config.contact.email}`} className="font-medium text-lime">
              {config.contact.email}
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card">
            <div className="space-y-6 text-sm leading-relaxed text-white/70">
              <p>
                I partner with growth-stage fintech leaders to drive operational excellence and enable scalable,
                sustainable growth.
              </p>
              <p>
                From building high-performing teams to refining cross-functional processes, I bring clarity,
                structure, and momentum to complex initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
