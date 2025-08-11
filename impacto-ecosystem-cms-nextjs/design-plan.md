# Evolução de UX e UI usando Double Diamond e Matriz CSD

Este documento resume como aplicar a metodologia **Double Diamond** e a **Matriz CSD** para evoluir o ecossistema de consultoria e venda de e‑books.  Embora o código final implementado neste repositório use arquivos estáticos como fonte de dados, as técnicas descritas aqui também servem para orientar a integração de um CMS de verdade (ex.: Strapi, Sanity, Contentful ou um backend via Vercel Functions).

## Visão geral do CMS

Um *Content Management System* permite que conteúdos (e‑books, posts de blog, páginas) sejam editados sem mexer no código.  Para este projeto você pode optar por:

1. **CMS headless**: plataformas como **Sanity** ou **Strapi** fornecem APIs para criar, editar e consultar conteúdos.  O Next.js consome esses dados via [`getStaticProps`/`getServerSideProps`] ou através de rotas de API.  Integrações como estas exigem credenciais (definidas em `.env.local`) e podem executar em **Vercel Functions**.
2. **CMS customizado**: usar **Prisma + SQLite/PostgreSQL** ou **Vercel Blob/Edge Config** para armazenar dados.  Crie rotas em `app/api/*` que façam CRUD e utilize formularios com autenticação mínima para gerenciar conteúdo.  Esta abordagem é flexível e funciona bem com **Cron Jobs** para tarefas recorrentes.
3. **Arquivos locais (demo)**: a versão inclusa neste repositório usa arrays em `data/ebooks.ts` e `data/posts.ts`.  Para adicionar novos e‑books ou posts, edite esses arquivos ou crie um pequeno script de edição.  Para algo mais robusto, migre essas fontes para um CMS como descrito acima.

## Aplicando o Double Diamond

O **Double Diamond** divide o processo de design em quatro fases — duas de divergência e duas de convergência — para garantir que exploramos o problema antes de propor soluções.  Abaixo, cada fase adaptada ao nosso projeto:

### 1. Descobrir (Discover)

- **Pesquisa com usuários**: converse com leitores de e‑books e clientes de consultoria para entender necessidades, frustrações e comportamentos.  Use formulários online, entrevistas e análises de analytics.
- **Benchmarking**: analise sites de venda de e‑books, plataformas de educação e outras consultorias para entender boas práticas e lacunas de mercado.
- **Mapas de empatia e personas**: crie perfis que representem os principais públicos‑alvo (ex.: empreendedores, gestores de marketing, times de ESG) e liste suas motivações.
- **Inventário de conteúdo**: levante quais temas já existem no seu acervo e quais são demandados, identificando oportunidades para novos títulos.

### 2. Definir (Define)

Esta fase converge os aprendizados para um foco claro.  Uma ferramenta útil é a **Matriz CSD** (*Certezas*, *Suposições* e *Dúvidas*).  Ela organiza conhecimento e esclarece o que precisa ser investigado.  Exemplo:

| Certezas | Suposições | Dúvidas |
|---|---|---|
| Há demanda por conteúdos estratégicos digitais. | Usuários preferem pagar por pacotes de e‑books em vez de compras avulsas. | Qual faixa de preço otimiza conversão sem reduzir valor percebido? |
| Consultorias personalizadas agregam valor às empresas. | Ter um blog gratuito gera autoridade e aumenta as vendas. | O público valoriza mais webinars ao vivo ou e‑books? |
| Necessário facilitar o gerenciamento de conteúdo sem editar o código. | Uma área do cliente aumentará retenção. | Que funcionalidade deve ser priorizada na área do cliente? |

Após preencher a matriz, transforme as suposições em hipóteses a serem validadas e crie questões de pesquisa para as dúvidas.

### 3. Desenvolver (Develop)

- **Ideação**: brainstorm com a equipe para gerar soluções que respondam às hipóteses.  Pense em funcionalidades de CMS, novas seções de conteúdo, layouts alternativos e integrações (pagamento, agendamento, newsletter).
- **Prototipação rápida**: use wireframes de baixa fidelidade para validar fluxos de navegação e testar a hierarquia de informações.  Ferramentas como Figma ou Miro são úteis.
- **Testes de usabilidade**: aplique testes com usuários reais para avaliar se encontram facilmente e‑books, posts e informações de consultoria.  Observe onde há confusão e refine o design.

### 4. Entregar (Deliver)

- **Implementação incremental**: converta os protótipos validados em código, priorizando as funcionalidades críticas.  Integre o CMS escolhido ao Next.js com rotas de API e construa componentes reutilizáveis.
- **Ajustes de UI**: refine cores, tipografia e espaçamentos seguindo a identidade da marca.  Certifique‑se de que a acessibilidade (contraste, tamanhos de fonte, navegação via teclado) seja respeitada.
- **Deploy e monitoramento**: configure a aplicação para ser hospedada na Vercel.  Defina variáveis de ambiente (.env.local) para URLs de checkout, calendários de agendamento, chaves do CMS e ferramentas de análise (GA, Meta Pixel).  Use *Cron Jobs* e *Vercel Functions* para tarefas recorrentes como geração de sitemap e sincronização de conteúdo.

## Próximos passos sugeridos

1. **Escolher e integrar um CMS**: defina se prefere um serviço pronto (Sanity/Strapi) ou solução customizada.  Migre os dados de `data/ebooks.ts` e `data/posts.ts` para o CMS e adapte as páginas para consumir os dados via API.
2. **Pesquisa de usuários**: realize entrevistas e colete métricas de tráfego para validar hipóteses listadas na Matriz CSD.
3. **Área do cliente**: implemente autenticação (pode usar *NextAuth.js* ou Vercel Password Protect) e permita que clientes acessem seus downloads e recibos.
4. **Design iterativo**: com base no feedback dos testes, refine a navegação, estrutura de catálogo, páginas de vendas e CTA’s.  Continue usando a Matriz CSD para documentar novas descobertas.

Seguindo essas etapas, você garante que o site evolua de forma centrada no usuário, com base em dados e alinhado aos objetivos de negócio.