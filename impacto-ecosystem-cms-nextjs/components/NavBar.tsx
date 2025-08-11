import Link from 'next/link';

const menu = [
  { href: '/', label: 'Home' },
  { href: '/ebooks', label: 'eBooks' },
  { href: '/blog', label: 'Blog' },
  { href: '/consultoria', label: 'Consultoria' },
  { href: '/programas', label: 'Programas' },
  { href: '/conteudos', label: 'Conteúdos' },
  { href: '/afiliados', label: 'Afiliados' },
  { href: '/sobre', label: 'Sobre' }
];

export default function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-brand">Impacto</Link>
        <div className="space-x-4 hidden md:block">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}