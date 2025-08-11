import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function AreaClientePage() {
  return (
    <div>
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-brand">Área do Cliente</h1>
        <p className="mb-4 text-gray-700">
          Esta seção será dedicada aos clientes para acessar seus downloads de
          eBooks e informações de compras. Em breve traremos novidades.
        </p>
      </main>
      <Footer />
    </div>
  );
}