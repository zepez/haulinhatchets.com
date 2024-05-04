import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const nav = [
    {
      name: "Locations",
      href: "/#locations",
    },
    {
      name: "Contact",
      href: "/#contact",
    },
    {
      name: "Waiver",
      href: "/waiver",
    },
  ];

  return (
    <header className="header-background flex flex-col items-center justify-between py-8 shadow-xl lg:flex-row lg:px-24 lg:py-4">
      <Link
        href="/"
        title="Haulin' Hatchets Homepage"
        className="flex items-center gap-2 pb-4 lg:pb-0"
      >
        <Image
          src="/haulin-hatchets-logo.png"
          alt="Haulin' Hatchets Logo"
          className="h-auto w-24 -rotate-12"
          width={100}
          height={100}
        />
        <h1 className="font-display text-4xl font-bold tracking-wide">
          Haulin Hatchets
        </h1>
      </Link>
      <nav>
        <ul className="text-md font-cal flex flex-wrap gap-x-8 text-center font-semibold uppercase lg:gap-x-12 lg:text-lg">
          {nav.map(({ name, href }) => (
            <li key={name}>
              <Link title={`Haulin' Hatchets ${name}`} href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
