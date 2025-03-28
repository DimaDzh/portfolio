import { MenusItem, StrapiImage } from "@/[lang]/types";

export const mockHeaderBarData = {
  data: {
    id: 1,
    logo: {
      data: {
        id: 1,
        attributes: {
          url: "/uploads/logo.png", // Mock logo URL
          alternativeText: "Logo",
        },
      },
    } as StrapiImage,
  },
  menus: {
    id: 1,
    title: "Main Menu",
    slug: "main-menu",
    items: [
      {
        id: 1,
        order: 1,
        title: "Home",
        url: "/",
        target: "_self",
      },
      {
        id: 2,
        order: 2,
        title: "About",
        url: "/about",
        target: "_self",
      },
      {
        id: 3,
        order: 3,
        title: "Projects",
        url: "/projects",
        target: "_self",
      },
      {
        id: 4,
        order: 4,
        title: "Contact",
        url: "/contact",
        target: "_self",
      },
    ],
  },
};
