import { StrapiImage } from "../types";

export function getStrapiImageUrl(image: StrapiImage) {
  const imageUrl: string = image?.data?.attributes?.url;
  return imageUrl;
}
