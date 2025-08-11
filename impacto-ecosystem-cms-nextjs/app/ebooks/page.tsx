import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ebooks as localEbooks } from '../../data/ebooks';
import { useEffect, useState } from 'react';
import { getStrapiEbooks } from '../../lib/strapi';

export default function EbookListPage() {
  // estado para controle de busca e lista de ebooks
  const [query, setQuery] = useState('');
  const [ebooks, setEbooks] = useState(localEbooks);

  // tenta buscar os eBooks no Strapi ao montar o componente
  useEffect(() => {
    async function load() {
      try {
        const data: any = await getStrapiEbooks();
        // transforma a estrutura do Strapi em formato compatível
        const normalized = data.map((item: any) => ({
          id: item.id,
          slug: item.attributes.slug,
          title: item.attributes.title,
          description: item.attributes.description,
          price: item.attributes.price,
          image: item.attributes.cover?.data?.attributes?.url || '/placeholder.png',
          checkoutUrl: item.attributes.checkoutUrl || process.env.NEXT_PUBLIC_CHECKOUT_URL,
        }));
        setEbooks(normalized);
      } catch (e) {
        // em caso de erro, mantém os dados locais
        console.warn('Erro ao carregar eBooks do Strapi, usando dados locais.', e);
      }
    }
    load();
  }, []);

  const filtered = ebooks.filter((ebook) =>
    ebook.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-brand">eBooks</h1>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-6 w-full max-w-md"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((ebook) => (
            <div
              key={ebook.slug}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <div className="h-40 w-full bg-gray-100 rounded-md mb-4 overflow-hidden">
                {/* Placeholder for cover; images served from public/images */}
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {ebook.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {ebook.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-brand">
                  R$ {ebook.price.toFixed(2)}
                </span>
                <div className="flex gap-2">
                  <Link
                    href={`/ebooks/${ebook.slug}`}
                    className="text-sm px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark"
                  >
                    Ver mais
                  </Link>
                  {ebook.checkoutUrl && (
                    <a
                      href={ebook.checkoutUrl}
                      className="text-sm px-4 py-2 rounded-md bg-secondary text-white hover:bg-secondary-dark"
                    >
                      Comprar
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}