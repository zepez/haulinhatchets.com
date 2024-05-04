import Content from "@/markdown/axe-throwing-tutorial.mdx";

export default function Page() {
  return (
    <article className="prose-invert prose-neutral prose-h1:text-5xl prose-headings:font-bold prose-headings:mb-4 prose-img:w-auto prose-h3:text-3xl prose-p:mb-8 prose-img:max-h-[400px] prose-img:mx-auto prose-img:rounded-md mx-auto mt-16 max-w-2xl px-8 pt-8">
      <Content />
    </article>
  );
}
