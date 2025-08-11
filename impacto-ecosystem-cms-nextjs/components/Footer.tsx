export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Impacto Ecosystem. Todos os direitos reservados.
      </div>
    </footer>
  );
}