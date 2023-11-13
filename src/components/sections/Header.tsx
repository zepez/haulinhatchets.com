import Link from "next/link";

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
    <div className="flex flex-col items-center justify-center w-full px-4 py-4 lg:px-24 lg:flex-row lg:flex-wrap lg:justify-between header-background">
      <Link href="/" className="flex items-center gap-2 pb-6 sm:pb-0">
        <img
          src="/haulin-hatchets.png"
          alt="Haulin' Hatchets Logo"
          className="w-24 h-auto -rotate-12"
        />
        <h1 className="text-4xl font-bold tracking-wide font-display">
          Haulin Hatchets
        </h1>
      </Link>
      <nav>
        <ul className="flex font-semibold text-center uppercase text-md sm:text-lg gap-x-6 sm:gap-x-12 font-cal">
          {nav.map(({ name, href }) => (
            <li>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
