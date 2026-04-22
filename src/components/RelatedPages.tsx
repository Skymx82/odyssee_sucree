import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type RelatedLink = {
  href: string;
  title: string;
  description: string;
};

type Props = {
  title?: string;
  intro?: string;
  links: RelatedLink[];
};

export default function RelatedPages({
  title = 'Pour aller plus loin',
  intro,
  links,
}: Props) {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F3E8FF]/20 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">{title}</h2>
          {intro && (
            <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">{intro}</p>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-[#D8C7E8]/30 transition-all hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-2 group-hover:text-[#9B7AB8] transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
                {link.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#9B7AB8]">
                Découvrir
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
