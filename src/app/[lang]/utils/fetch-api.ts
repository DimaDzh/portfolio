import { getStrapiURL } from "./api-helpres";
import qs from "qs";

export const fetchSWRData = async (url: string) => {
  const response = await fetch(`${getStrapiURL(url)}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {},
  locale: string | null = "en"
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 50 },
      headers: {
        "Content-Type": "application/json",
        // Add locale header if a locale is provided
        ...(locale && { "Accept-Language": locale }),
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    // console.log('requestUrl: ', requestUrl)
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}
