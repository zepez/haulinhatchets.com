import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

interface Props {
  cta?: string;
  href: string;
  img?: string;
  label?: string;
  title?: string;
  description?: string;
  className?: string;
}

export const Callout = ({
  cta,
  href,
  img,
  label,
  title,
  description,
  className,
}: Props) => {
  return (
    <Section className={cn(className, "mt-16")}>
      {cta && <p className="pb-4 text-center text-xl font-bold">{cta}</p>}
      <Link
        href={href}
        className="bg-background font-foreground border-foreground flex flex-wrap gap-8 rounded-md border p-8 sm:flex-nowrap"
      >
        {img && (
          <Image
            src={img}
            alt={title || href}
            unoptimized={href.includes(".gif")}
            width={300}
            height={300}
            className="mx-auto max-h-[250px] max-w-[250px] rounded-md sm:max-h-[200px] sm:max-w-[200px]"
          />
        )}
        <div>
          {label && <p className="font-bold uppercase">{label}</p>}
          {title && <p className="pt-1 text-3xl font-bold">{title}</p>}
          {description && <p className="pt-3">{description}</p>}
        </div>
      </Link>
    </Section>
  );
};
