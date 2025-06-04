import axios from "axios";

export async function getPageBySlug(slug: string, lang: string) {
  const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  try {
    const response = await axios.get(`${apiUrl}/api/pages/${slug}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
