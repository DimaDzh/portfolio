export function getStrapiURL(path = "") {
  return `${
    "https://portfolio-admin-ysq7.onrender.com" || "http://localhost:1337"
  }${path}`;
}
