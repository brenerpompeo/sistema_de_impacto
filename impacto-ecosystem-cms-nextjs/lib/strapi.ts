/**
 * Helper functions to fetch data from a Strapi backend.  These functions
 * assume that the Strapi REST API uses the default `/api` prefix.  To use
 * them set the environment variable `NEXT_PUBLIC_STRAPI_URL` to the base
 * URL of your Strapi instance (for example, `https://cms.example.com/api`).
 */

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function fetchAPI(path: string) {
  if (!API_URL) {
    throw new Error(
      'NEXT_PUBLIC_STRAPI_URL não foi definido. Defina-o em `.env.local` para habilitar a integração com o Strapi.'
    );
  }
  const url = `${API_URL}${path}`;
  const res = await fetch(url, {
    // tell Next.js to revalidate this data periodically when using SSG
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`Falha ao buscar dados do Strapi: ${res.statusText}`);
  }
  const json = await res.json();
  // No Strapi v4 os dados retornados ficam dentro da propriedade `data`
  return json.data;
}

export async function getStrapiEbooks() {
  return await fetchAPI('/ebooks?populate=*');
}

export async function getStrapiEbook(slug: string) {
  // Filtra por slug e popula todas as relações
  const data = await fetchAPI(
    `/ebooks?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  );
  // data é um array de entradas; retornamos a primeira
  return Array.isArray(data) ? data[0] : null;
}

export async function getStrapiPosts() {
  return await fetchAPI('/posts?populate=*');
}

export async function getStrapiPost(slug: string) {
  const data = await fetchAPI(
    `/posts?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  );
  return Array.isArray(data) ? data[0] : null;
}