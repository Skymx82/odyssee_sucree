import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { Article } from '@/data/articles';
import RelatedPages, { RelatedLink } from '@/components/RelatedPages';

const SITE_URL = 'https://www.odysseesucree.com';

export type BlogSection = {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'callout' | 'quote';
  content: string;
  items?: string[];
};

type Props = {
  article: Article;
  sections: BlogSection[];
  related?: RelatedLink[];
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}

export default function BlogArticle({ article, sections, related }: Props) {
  const pageUrl = `${SITE_URL}/journal/${article.slug}`;

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${pageUrl}/#article`,
    headline: article.title,
    description: article.metaDescription,
    image: `${SITE_URL}${article.cover}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Aurore Afchain',
      url: `${SITE_URL}/#apropos`,
      jobTitle: 'Pâtissière',
    },
    publisher: {
      '@type': 'Bakery',
      '@id': `${SITE_URL}/#bakery`,
      name: 'Odyssée Sucrée',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    keywords: article.keywords.join(', '),
    url: pageUrl,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Journal', item: `${SITE_URL}/journal` },
      { '@type': 'ListItem', position: 3, name: article.title, item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="relative pt-28 pb-20 bg-white">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#9B7AB8] hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au journal
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-4 py-1.5 text-xs uppercase tracking-wider">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[#6B6B6B] mb-10">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#9B7AB8]" />
              Publié le {formatDate(article.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#9B7AB8]" />
              {article.readTime}
            </span>
            <span className="inline-flex items-center gap-2">
              Par <strong className="text-[#2D2D2D]">Aurore Afchain</strong>
            </span>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src={article.cover}
              alt={article.coverAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="space-y-6">
            {sections.map((section, i) => {
              if (section.type === 'h2') {
                return (
                  <h2
                    key={i}
                    className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mt-12 mb-4 scroll-mt-24"
                  >
                    {section.content}
                  </h2>
                );
              }
              if (section.type === 'h3') {
                return (
                  <h3 key={i} className="text-xl md:text-2xl font-semibold text-[#2D2D2D] mt-8 mb-3">
                    {section.content}
                  </h3>
                );
              }
              if (section.type === 'ul' && section.items) {
                return (
                  <ul key={i} className="space-y-3 pl-1">
                    {section.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-lg text-[#6B6B6B] leading-relaxed"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#9B7AB8] mt-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (section.type === 'callout') {
                return (
                  <aside
                    key={i}
                    className="bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/20 border-l-4 border-[#9B7AB8] rounded-r-2xl p-6 my-8"
                  >
                    <p className="text-lg text-[#2D2D2D] leading-relaxed">{section.content}</p>
                  </aside>
                );
              }
              if (section.type === 'quote') {
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-[#9B7AB8] pl-6 italic text-xl text-[#2D2D2D] my-8"
                  >
                    {section.content}
                  </blockquote>
                );
              }
              return (
                <p
                  key={i}
                  className="text-lg text-[#6B6B6B] leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              );
            })}
          </div>

          <div className="mt-16 pt-10 border-t border-[#D8C7E8]/40 bg-gradient-to-br from-[#FADADD]/20 to-[#D8C7E8]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3">
              Vous avez un projet gâteau ?
            </h3>
            <p className="text-[#6B6B6B] mb-6">
              Aurore vous accompagne de A à Z : choix du style, des parfums, du décor, dégustation à
              l'atelier, livraison et dressage sur votre lieu de réception.
            </p>
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-semibold shadow-lg">
              <Link href="/#contact">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </article>

        {related && related.length > 0 && (
          <RelatedPages
            title="Pour aller plus loin"
            intro="D'autres pages et articles pour préparer votre événement."
            links={related}
          />
        )}
      </main>
    </>
  );
}
