import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { posts as localPosts } from '../../../data/posts';
import { getStrapiPost } from '../../../lib/strapi';

interface Props {
  params: { slug: string };
}

function renderContent(content: string) {
  // A very naive Markdown renderer: split by double newline into paragraphs
  const paragraphs = content.split(/\n\n+/);
  return paragraphs.map((p, idx) => (
    <p key={idx} className="mb-4 text-gray-700 whitespace-pre-line">
      {p.replace(/^#\s*/, '')}
    </p>
  ));
}

export default async function BlogPostPage({ params }: Props) {
  let post = localPosts.find((p) => p.slug === params.slug);
  // tenta obter do Strapi
  if (process.env.NEXT_PUBLIC_STRAPI_URL) {
    try {
      const data: any = await getStrapiPost(params.slug);
      if (data) {
        post = {
          slug: data.attributes.slug,
          title: data.attributes.title,
          date: data.attributes.date,
          excerpt: data.attributes.excerpt,
          content: data.attributes.content,
        };
      }
    } catch (e) {
      console.warn('Erro ao buscar post do Strapi, usando dados locais.', e);
    }
  }
  if (!post) {
    return (
      <div>
        <NavBar />
        <main className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-2xl font-bold text-red-600">Post não encontrado</h1>
          <Link href="/blog" className="text-brand underline mt-4 inline-block">
            Voltar para o blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2 text-brand">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {new Date(post.date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </p>
        <div className="prose prose-indigo max-w-none">
          {renderContent(post.content)}
        </div>
        <div className="mt-8">
          <Link href="/blog" className="text-brand underline">
            ← Voltar para blog
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}