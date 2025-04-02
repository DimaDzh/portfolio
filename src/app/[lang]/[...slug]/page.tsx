import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug } from "../utils/get-page-by-slug";
import componentResolver from "../utils/component-resolver";

type Props = {
  params: {
    lang: string;
    slug: string[];
  };
};

interface PageAttributes {
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  contentSections: Array<{ type: string; content: Record<string, unknown> }>;
}

interface PageData {
  slug: string;
  title: string;
  content: string;
  components: Array<{ type: string; data: Record<string, unknown> }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug.join("/");
  const pageData = await getPageBySlug(slug, params.lang);

  return {
    title: pageData.title,
    description: pageData.content,
  };
}

export default async function PageRoute({ params }: Props) {
  const slug = params.slug.join("/");
  const pageData: PageData = await getPageBySlug(slug, params.lang);

  if (!pageData) {
    notFound();
  }
  // console.log("pageData", pageData);
  return (
    <section className="flex flex-col  gap-12 w-full h-screen ">
      {pageData.components.map((section, index) =>
        componentResolver(section, index)
      )}
    </section>
  );
}
