import Link from 'next/link';
import Image from 'next/image';
import { Ebook } from '@/lib/strapi'; // Usando o contrato de dados

interface EbookCardProps {
  ebook: Ebook;
}

// Helper para obter a URL da imagem do Strapi
function getStrapiMediaUrl(url: string) {
  // Se a URL já for absoluta, retorne-a. Caso contrário, construa com a base do Strapi.
  if (url.startsWith('http')) {
    return url;
  }
  // Remove a /api do final se a variável de ambiente a contiver
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/api$/, '') || '';
  return `${strapiUrl}${url}`;
}

export default function EbookCard({ ebook }: EbookCardProps) {
  const { title, price, slug, cover } = ebook.attributes;
  const coverUrl = cover.data ? getStrapiMediaUrl(cover.data.attributes.url) : '/images/placeholder.png';
  const coverAlt = cover.data?.attributes.alternativeText || `Capa do eBook ${title}`;

  return (
    <Link href={`/ebooks/${slug}`} className="group block overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={coverUrl}
          alt={coverAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-brand">
          {title}
        </h3>
        <p className="mt-2 text-xl font-bold text-secondary">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
        </p>
      </div>
    </Link>
  );
}
