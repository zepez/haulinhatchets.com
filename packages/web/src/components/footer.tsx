import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-background mt-24 flex flex-col items-center justify-center gap-2 pb-8 pt-10 text-xs">
      <p>Copyright © {year} Haulin Hatchets L.L.C.</p>
      <p>
        Designed and developed by{" "}
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
