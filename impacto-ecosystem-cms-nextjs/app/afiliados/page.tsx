import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function AfiliadosPage() {
  return (
    <div>
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-brand">Programa de Afiliados</h1>
        <p className="mb-4 text-gray-700">
          Quer ganhar comissões indicando nossos eBooks e programas? Junte-se ao
          nosso programa de afiliados. Você receberá um link único para
          compartilhar e acompanhar suas vendas.
        </p>
        <p className="mb-4 text-gray-700">
          Em breve disponibilizaremos a área de cadastro e acompanhamento. Até
          lá, entre em contato conosco para saber mais.
        </p>
      </main>
      <Footer />
    </div>
  );
}