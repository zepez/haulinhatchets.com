import Image from "next/image";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

interface Meta {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  banner: string;
  publishedAt: string;
  author: string;
  heading: string;
  subheading: string;
}

const getPage = async (slug: string) => {
  try {
    const {
      default: Content,
      meta,
    }: {
      default: React.ComponentType;
      meta: Meta;
    } = await import(`@/articles/${slug}.mdx`);

    return { Content, meta };
  } catch (e) {
    return { content: null, meta: null };
  }
};

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const { meta } = await getPage(slug);

  if (!meta) return notFound();

  const title = `${meta.title} | Haulin' Hatchets`;
  const { description } = meta;

  return {
    title,
    description,
    keywords: ["Wilson, NC", ...meta.tags],
    openGraph: {
      title,
      description,
      siteName: "Haulin' Hatchets",
      images: [
        {
          url: "https://haulinhatchets.com/og.png",
          width: 800,
          height: 600,
          alt: "Haulin' Hatchets Open Graph Image",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@zepezAlex",
      images: [
        {
          url: "https://haulinhatchets.com/twitter.png",
          alt: "Haulin' Hatchets Twitter Image",
        },
      ],
    },
  };
}

export default async function Page({ params: { slug } }: Props) {
  const { Content, meta } = await getPage(slug);

  if (!Content || !meta) {
    return notFound();
  }

  return (
    <article className="mx-auto mt-16 w-full max-w-4xl px-8 pt-8">
      <Wrapper>
        <h1 className="text-4xl font-bold">
          {meta.heading} <br />{" "}
          <span className="text-2xl">{meta.subheading}</span>
        </h1>
      </Wrapper>

      <Image
        alt="Axe Throwing Tutorial Banner Image"
        src={meta.banner}
        width={1000}
        height={1000}
        className="h-auto w-full max-w-[900px] rounded-md pt-8"
      />

      <Wrapper className="pb-8">
        {meta.tags.map((tag) => (
          <span
            key={tag}
            className="bg-foreground text-background mr-2 mt-4 inline-block rounded-md px-4 py-1 text-xs font-semibold uppercase tracking-wider opacity-70"
          >
            {tag}
          </span>
        ))}
      </Wrapper>

      <Wrapper className="prose-invert prose-neutral prose-h1:text-4xl prose-headings:font-bold prose-headings:mb-4 prose-img:w-auto prose-h3:text-3xl prose-p:mb-8 prose-img:max-h-[400px] prose-img:mx-auto prose-img:rounded-md">
        <Content />
      </Wrapper>
    </article>
  );
}

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(className, "mx-auto max-w-2xl")}>{children}</div>;
};
