import Image from "next/image";
import Link from "next/link";
import { Section } from "~/components/Section";

export const Footer = () => {
  return (
    <Section className="footer bg-zinc-900 py-6 bg-[url('/textures/2.jpg')] bg-blend-overlay">
      <div className="flex flex-wrap justify-around items-center max-w-sm mx-auto">
        <Image
          src="/haulin-hatchets.png"
          alt="Haulin' Hatchets Logo"
          width="200"
          height="175"
        />

        <nav className="text-white text-2xl mb-3">
          <ul>
            <li className="mb-2">
              <Link href="/">⌾ Home</Link>
            </li>
            <li className="mb-2">
              <a href="#locations">⌾ Locations</a>
            </li>
            <li className="mb-2">
              <a href="#contact">⌾ Contact</a>
            </li>
            <li>
              <Link href="/waiver">⌾ Waiver</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Section>
  );
};
