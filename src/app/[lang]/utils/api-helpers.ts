export function getServerURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:1337"
  }${path}`;
}

export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${getServerURL()}${url}`;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

// ADDS DELAY TO SIMULATE SLOW API REMOVE FOR PRODUCTION
export const delay = (time: number) =>
  new Promise((resolve) => setTimeout(() => resolve(1), time));

export const getStrapiBaseURL = () => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}`;
};

export function formatOrderDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Helper to check for XSS and SQL injection patterns
export const hasMaliciousInput = (value: string) => {
  // Basic XSS: <script>, <img ... onerror=, etc.
  const xssPattern =
    /<\s*script|on\w+\s*=|<\s*img|<\s*iframe|<\s*svg|<\s*object|<\s*embed|<\s*link|<\s*meta|<\s*style|javascript:/i;
  // Basic SQLi: common SQL keywords and patterns
  const sqlPattern =
    /('|--|;|\/\*|\*\/|\b(select|insert|update|delete|drop|union|alter|create|truncate|exec|declare|cast)\b)/i;
  return xssPattern.test(value) || sqlPattern.test(value);
};
