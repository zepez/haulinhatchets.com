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
    <header className="flex flex-col items-center justify-between py-8 shadow-xl lg:py-4 lg:flex-row lg:px-24 header-background">
      <Link href="/" className="flex items-center gap-2 pb-4 lg:pb-0">
        <Image
          src="/haulin-hatchets.png"
          alt="Haulin' Hatchets Logo"
          className="w-24 h-auto -rotate-12"
          width={100}
          height={100}
        />
        <h1 className="text-4xl font-bold tracking-wide font-display">
          Haulin Hatchets
        </h1>
      </Link>
      <nav>
        <ul className="flex flex-wrap font-semibold text-center uppercase text-md lg:text-lg gap-x-8 lg:gap-x-12 font-cal">
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
