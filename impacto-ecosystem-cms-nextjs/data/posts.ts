export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: 'como-escolher-o-ebook-certo',
    title: 'Como escolher o eBook certo para o seu momento',
    date: '2025-08-01',
    excerpt:
      'Neste artigo explicamos como identificar os temas mais relevantes para a sua carreira ou negócio ao comprar eBooks.',
    content:
      `# Como escolher o eBook certo\n\nEncontrar o eBook ideal envolve entender seu contexto, objetivos e desafios. Faça uma lista de temas que deseja explorar e confira as descrições e sumários antes de comprar. Aqui no Impacto Ecosystem disponibilizamos uma curadoria de títulos para diferentes estágios de aprendizado.`,
  },
  {
    slug: 'beneficios-da-consultoria-estrategica',
    title: 'Benefícios da consultoria estratégica para pequenas empresas',
    date: '2025-07-20',
    excerpt:
      'Descubra como a consultoria estratégica pode aumentar a produtividade, definir prioridades e gerar crescimento sustentável para pequenas empresas.',
    content:
      `# Benefícios da consultoria estratégica\n\nContratar uma consultoria estratégica ajuda você a tomar decisões embasadas e aproveitar oportunidades de mercado. Com o olhar de especialistas, é possível otimizar processos, reduzir custos e acelerar a inovação. Saiba mais sobre nossos pacotes de consultoria.`,
  },
];