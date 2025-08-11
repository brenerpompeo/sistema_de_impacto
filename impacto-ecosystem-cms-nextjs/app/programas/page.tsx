import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function ProgramasPage() {
  return (
    <div>
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-brand">Programas</h1>
        <p className="mb-4 text-gray-700">
          Nossos programas são experiências de aprendizado aprofundadas que
          combinam teoria e prática para impulsionar profissionais e equipes.
          Explore imersões em gestão estratégica, marketing digital, liderança
          contemporânea e muito mais.
        </p>
        <p className="mb-4 text-gray-700">
          Entre em contato para saber mais sobre as datas de início, conteúdos e
          valores de investimento.
        </p>
      </main>
      <Footer />
    </div>
  );
}