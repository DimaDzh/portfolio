import { getStrapiURL } from "./api-helpres";

export const fetchSWRData = async (url: string) => {
  const response = await fetch(`${getStrapiURL(url)}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
