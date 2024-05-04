import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center gap-2 pt-10 pb-8 mt-24 text-xs footer-background">
      <p>Copyright © {year} Haulin Hatchets L.L.C.</p>
      <p>
        Developed and designed by{" "}
        <Link
          title="Alexander Zepezauer"
          target="_blank"
          href="https://zepez.dev"
          className="underline"
        >
          Alexander Zepezauer
        </Link>
      </p>
    </footer>
  );
};
