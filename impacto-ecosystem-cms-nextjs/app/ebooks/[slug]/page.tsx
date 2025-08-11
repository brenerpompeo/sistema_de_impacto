import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { ebooks as localEbooks } from '../../../data/ebooks';
import { getStrapiEbook } from '../../../lib/strapi';

interface Props {
  params: { slug: string };
}

export default async function EbookDetailPage({ params }: Props) {
  let ebook = localEbooks.find((b) => b.slug === params.slug);
  // tenta carregar o eBook do Strapi caso a variável de ambiente esteja definida
  if (process.env.NEXT_PUBLIC_STRAPI_URL) {
    try {
      const data: any = await getStrapiEbook(params.slug);
      if (data) {
        ebook = {
          id: data.id,
          slug: data.attributes.slug,
          title: data.attributes.title,
          description: data.attributes.description,
          price: data.attributes.price,
          image: data.attributes.cover?.data?.attributes?.url || '/placeholder.png',
          checkoutUrl:
            data.attributes.checkoutUrl || process.env.NEXT_PUBLIC_CHECKOUT_URL,
        };
      }
    } catch (e) {
      console.warn('Erro ao obter eBook do Strapi, usando dados locais.', e);
    }
  }

  if (!ebook) {
    return (
      <div>
        <NavBar />
        <main className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-2xl font-bold text-red-600">eBook não encontrado</h1>
          <Link href="/ebooks" className="text-brand underline mt-4 inline-block">
            Voltar para catálogo
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 w-full md:w-1/3 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={ebook.image}
              alt={ebook.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4 text-brand">
              {ebook.title}
            </h1>
            <p className="text-gray-700 mb-4">{ebook.description}</p>
            <p className="text-2xl font-bold text-brand mb-6">
              R$ {ebook.price.toFixed(2)}
            </p>
            {ebook.checkoutUrl && (
              <a
                href={ebook.checkoutUrl}
                className="inline-block px-6 py-3 rounded-md bg-secondary text-white font-semibold hover:bg-secondary-dark mb-4"
              >
                Comprar agora
              </a>
            )}
            <div className="mt-4">
              <Link href="/ebooks" className="text-brand underline">
                ← Voltar para eBooks
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}