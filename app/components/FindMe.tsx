import Link from 'next/link';
import { config } from '@/content/config';
import { FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const icons = {
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
  instagram: FaInstagram,
  email: HiOutlineMail,
};

const socialOrder: Array<keyof typeof icons> = ['twitter', 'linkedin', 'youtube', 'instagram', 'email'];

export function FindMe() {
  return (
    <section id="contact" className="bg-light-gray py-24 text-charcoal">
      <div className="mx-auto flex max-w-4xl flex-col items-center space-y-10 px-6 text-center">
        <h2 className="font-script text-4xl">Find Me</h2>
        <div className="flex flex-wrap items-center justify-center gap-6 text-3xl text-charcoal">
          {socialOrder.map((key) => {
            const Icon = icons[key];
            const href =
              key === 'email'
                ? `mailto:${config.contact.email}`
                : config.contact.social[key as keyof typeof config.contact.social];
            const external = key !== 'email';
            return (
              <Link
                key={key}
                href={href}
                aria-label={key}
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-charcoal bg-white text-charcoal transition hover:-translate-y-1 hover:border-orange hover:text-orange"
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                <Icon />
              </Link>
            );
          })}
        </div>
        <p className="text-base text-medium-gray">Let&apos;s connect and collaborate.</p>
      </div>
    </section>
  );
}
