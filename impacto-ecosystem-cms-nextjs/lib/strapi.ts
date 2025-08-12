// =================================================================
// CONTRATOS DE DADOS (TYPES)
// =================================================================

// Interface para atributos de uma imagem no Strapi
export interface StrapiImageAttributes {
  url: string;
  alternativeText?: string;
  width: number;
  height: number;
}

// Interface para um objeto de imagem do Strapi
export interface StrapiImage {
  data: {
    id: number;
    attributes: StrapiImageAttributes;
  } | null;
}

// Interface para os atributos de um eBook
export interface EbookAttributes {
  slug: string;
  title: string;
  description: string;
  price: number;
  checkoutUrl: string;
  cover: StrapiImage;
}

// Interface para um objeto eBook vindo da API Strapi
export interface Ebook {
  id: number;
  attributes: EbookAttributes;
}

// Interface para os atributos de um Post
export interface PostAttributes {
  slug: string;
  title: string;
  date: string; // ISO date string
  excerpt: string;
  content: string; // Markdown content
}

// Interface para um objeto Post vindo da API Strapi
export interface Post {
  id: number;
  attributes: PostAttributes;
}


/**
 * Helper functions to fetch data from a Strapi backend.  These functions
 * assume that the Strapi REST API uses the default `/api` prefix.  To use
 * them set the environment variable `NEXT_PUBLIC_STRAPI_URL` to the base
 * URL of your Strapi instance (for example, `https://cms.example.com/api`).
 */

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function fetchAPI(path: string): Promise<any> {
  if (!API_URL) {
    console.error('NEXT_PUBLIC_STRAPI_URL not set. Strapi integration is disabled.');
    // Retornar um estado vazio ou de erro controlado
    return { data: null, error: 'Strapi URL not configured.' };
  }

  const requestUrl = `${API_URL}${path}`;

  try {
    const response = await fetch(requestUrl, {
      next: { revalidate: 60 }, // Revalidação a cada 60s
    });

    if (!response.ok) {
      console.error(`Error fetching ${requestUrl}: ${response.statusText}`);
      return { data: null, error: `Failed to fetch: ${response.status}` };
    }

    const data = await response.json();
    return data; // No v4, a propriedade `data` está no corpo da resposta
  } catch (error) {
    console.error(`Fetch API error for ${requestUrl}:`, error);
    return { data: null, error: 'Network or fetch error' };
  }
}


export async function getStrapiEbooks(): Promise<Ebook[]> {
  const response = await fetchAPI('/ebooks?populate=*');
  return response.data || [];
}

export async function getStrapiEbook(slug: string): Promise<Ebook | null> {
  const response = await fetchAPI(
    `/ebooks?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  );
  // A resposta de filtro é um array, pegamos o primeiro item
  return response.data && response.data.length > 0 ? response.data[0] : null;
}

export async function getStrapiPosts(): Promise<Post[]> {
  const response = await fetchAPI('/posts?populate=*');
  return response.data || [];
}

export async function getStrapiPost(slug: string): Promise<Post | null> {
  const response = await fetchAPI(
    `/posts?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  );
  return response.data && response.data.length > 0 ? response.data[0] : null;
}