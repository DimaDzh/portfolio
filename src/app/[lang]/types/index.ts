export type StrapiImage = {
  url: string;
  alt: string;
};

type StrapiImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

type StrapiImageFormats = {
  large: StrapiImageFormat;
  small: StrapiImageFormat;
  medium: StrapiImageFormat;
  thumbnail: StrapiImageFormat;
};

export type MenusItem = {
  order: number;
  title: string;
  url: string;
  target: string;
  id: number;
};

export type NavbarData = {
  logoUrl: string;
  menusList: MenusItem[];
};
