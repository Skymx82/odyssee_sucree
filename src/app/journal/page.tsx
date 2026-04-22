import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { articles } from '@/data/articles';

const SITE_URL = 'https://www.odysseesucree.com';
const PAGE_URL = `${SITE_URL}/journal`;

export const metadata: Metadata = {
  title: "Journal : Conseils, Inspirations et Tendances Pâtisserie",
  description:
    "Le journal d'Odyssée Sucrée : conseils pour choisir son wedding cake, tendances gâteaux d'anniversaire 2026, comparatifs et guides par Aurore, pâtissière à Montauban.",
  keywords: [
    'blog pâtisserie Montauban',
    'conseils wedding cake',
    'tendances gâteau mariage',
    'tendances gâteau anniversaire',
    'guide pâtisserie',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Journal Odyssée Sucrée : Conseils et Inspirations Pâtisserie",
    description:
      "Guides, comparatifs et inspirations autour du wedding cake, de la pièce montée et du gâteau d'anniversaire.",
    url: PAGE_URL,
    type: 'website',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${PAGE_URL}/#blog`,
  name: 'Journal Odyssée Sucrée',
  description:
    "Le journal d'Odyssée Sucrée : conseils, tendances et guides autour de la pâtisserie de mariage et d'anniversaire.",
  publisher: {
    '@type': 'Bakery',
    '@id': `${SITE_URL}/#bakery`,
    name: 'Odyssée Sucrée',
  },
  blogPost: articles.map((a) => ({
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.metaDescription,
    datePublished: a.publishedAt,
    image: `${SITE_URL}${a.cover}`,
    url: `${SITE_URL}/journal/${a.slug}`,
    author: { '@type': 'Person', name: 'Aurore Afchain' },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Journal', item: PAGE_URL },
  ],
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function JournalIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="relative pt-28 pb-24 bg-gradient-to-b from-white to-[#F3E8FF]/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-6 px-8 py-3 text-sm font-semibold tracking-wider uppercase"
            >
              Journal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] mb-6">
              Les conseils d'Aurore
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
              Guides, comparatifs et inspirations pour préparer votre wedding cake, votre pièce montée
              ou votre gâteau d'anniversaire, par une pâtissière qui connaît son métier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-[#D8C7E8]/30 transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.cover}
                    alt={article.coverAlt}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-wider text-[#9B7AB8] bg-[#F3E8FF] px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#9B7AB8] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#6B6B6B] pt-4 border-t border-[#D8C7E8]/30">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(article.publishedAt)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#9B7AB8]">
                    Lire l'article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <LegalModals />
    </>
  );
}
