export interface Ebook {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  image: string;
  checkoutUrl?: string;
}

export const ebooks: Ebook[] = [
  {
    id: 1,
    slug: 'estrategias-de-marketing-digital',
    title: 'Estratégias de Marketing Digital',
    description: 'Aprenda a planejar e executar campanhas de marketing digital que geram resultados.',
    price: 49.9,
    image: '/images/marketing-book.jpg',
    checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL || '#',
  },
  {
    id: 2,
    slug: 'lideranca-inovadora',
    title: 'Liderança Inovadora',
    description: 'Descubra como desenvolver habilidades de liderança voltadas à inovação e à cultura de impacto.',
    price: 59.9,
    image: '/images/leadership-book.jpg',
    checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL || '#',
  },
];