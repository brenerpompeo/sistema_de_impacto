import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ConsultoriaPage() {
  return (
    <div>
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-brand">Consultoria</h1>
        <p className="mb-4 text-gray-700">
          Oferecemos serviços de consultoria personalizados para ajudar sua empresa a
          prosperar. Nossos especialistas atuam em estratégia, marketing,
          inovação e liderança, adaptando abordagens às necessidades do seu
          negócio.
        </p>
        <p className="mb-4 text-gray-700">
          Entre em contato para agendar uma reunião inicial gratuita e entender
          como podemos apoiar seus objetivos.
        </p>
        {/* Example link to Calendly or WhatsApp (set via env) */}
        {process.env.NEXT_PUBLIC_CALENDLY_URL && (
          <a
            href={process.env.NEXT_PUBLIC_CALENDLY_URL}
            className="inline-block px-6 py-3 rounded-md bg-secondary text-white font-semibold hover:bg-secondary-dark mb-4"
          >
            Agendar reunião
          </a>
        )}
      </main>
      <Footer />
    </div>
  );
}