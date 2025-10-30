import Link from 'next/link';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { config } from '@/content/config';

const footerLinks = [
  { icon: FaTwitter, href: config.contact.social.twitter, label: 'Twitter' },
  { icon: FaLinkedinIn, href: config.contact.social.linkedin, label: 'LinkedIn' },
  { icon: FaYoutube, href: config.contact.social.youtube, label: 'YouTube' },
  { icon: FaInstagram, href: config.contact.social.instagram, label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-charcoal py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        <div className="space-y-2 text-sm text-white/70">
          <p className="text-base font-semibold text-white">Let&apos;s stay in touch.</p>
          <Link href={`mailto:${config.contact.email}`} className="text-lime">
            {config.contact.email}
          </Link>
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Katie Kelly. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 text-xl">
          {footerLinks.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="rounded-full border border-white/20 p-3 text-white transition hover:border-orange hover:text-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
