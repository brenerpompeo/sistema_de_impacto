import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ConteudosPage() {
  return (
    <div>
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-brand">Conteúdos</h1>
        <p className="mb-4 text-gray-700">
          Explore uma seleção de artigos, vídeos e recursos gratuitos para se
          atualizar sobre estratégia, marketing, liderança e inovação.
        </p>
        <p className="mb-4 text-gray-700">
          Dê uma olhada em nosso <Link href="/blog" className="text-brand underline">blog</Link> para artigos detalhados ou acompanhe nossos podcasts e vídeos em breve.
        </p>
      </main>
      <Footer />
    </div>
  );
}