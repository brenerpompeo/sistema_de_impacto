import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { posts as localPosts } from '../../data/posts';
import { getStrapiPosts } from '../../lib/strapi';

export default async function BlogListPage() {
  let allPosts = [...localPosts];
  if (process.env.NEXT_PUBLIC_STRAPI_URL) {
    try {
      const data: any = await getStrapiPosts();
      allPosts = data.map((item: any) => ({
        slug: item.attributes.slug,
        title: item.attributes.title,
        date: item.attributes.date,
        excerpt: item.attributes.excerpt,
        content: item.attributes.content,
      }));
    } catch (e) {
      console.warn('Erro ao buscar posts do Strapi, usando dados locais.', e);
    }
  }
  const sorted = allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <div>
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-brand">Blog</h1>
        <div className="space-y-8">
          {sorted.map((post) => (
            <article key={post.slug} className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="text-gray-800 hover:text-brand">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-brand underline">
                Leia mais →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}