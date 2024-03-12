export type StrapiImage = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: StrapiImageFormats;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      provider_metadata: {
        public_id: string;
        resource_type: string;
      }[];
      createdAt: string;
      updatedAt: string;
    };
  };
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
