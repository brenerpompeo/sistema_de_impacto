import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function SobrePage() {
  return (
    <div>
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-brand">Sobre nós</h1>
        <p className="mb-4 text-gray-700">
          O Impacto Ecosystem nasceu da vontade de democratizar o acesso a
          conhecimentos estratégicos e conectar empresas e profissionais a
          consultores experientes. Somos um ecossistema que oferece eBooks,
          consultoria e programas de formação para quem deseja evoluir.
        </p>
        <p className="mb-4 text-gray-700">
          Nosso time reúne especialistas em diversas áreas que se dedicam a
          construir conteúdo de alta qualidade e impactar positivamente a
          jornada dos nossos clientes.
        </p>
      </main>
      <Footer />
    </div>
  );
}