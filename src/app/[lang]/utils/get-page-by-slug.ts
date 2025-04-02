import axios from "axios";
import { fetchAPI } from "./fetch-api";

export async function getPageBySlug(slug: string, lang: string) {
  try {
    const response = await axios.get(`http://localhost:5000/api/pages/${slug}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
