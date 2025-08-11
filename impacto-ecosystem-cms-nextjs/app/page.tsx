import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-brand">
          Bem-vindo ao Impacto Ecosystem
        </h1>
        <p className="max-w-xl mb-8 text-lg text-gray-600">
          Um ecossistema de consultoria e conhecimento para acelerar o seu crescimento.
          Navegue por nossos eBooks, contrate sessões de consultoria ou aprofunde seus
          conhecimentos com nossos programas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/ebooks" className="px-6 py-3 rounded-lg bg-brand text-white font-semibold shadow hover:bg-brand-dark transition">
            Ver eBooks
          </Link>
          <Link href="/consultoria" className="px-6 py-3 rounded-lg bg-secondary text-white font-semibold shadow hover:bg-secondary-dark transition">
            Consultoria
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}