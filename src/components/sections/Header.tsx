import Image from "next/image";

import { Section } from "~/components/Section";

export const Header = () => {
  return (
    <Section className="header bg-zinc-900 mb-16 bg-[url('/textures/2.jpg')] bg-blend-overlay">
      <div className="flex justify-center flex-wrap items-center py-8 sm:py-16">
        <Image
          src="/haulin-hatchets.png"
          alt="Haulin' Hatchets Logo"
          width="300"
          height="262"
        />
        <div className="hidden sm:block">
          <h1 className="text-7xl text-white font-bold">
            Haulin 🪓
            <br />
            Hatchets{" "}
            <span className="text-2xl text-white font-bold pb-4">L.L.C.</span>
          </h1>
        </div>
      </div>
    </Section>
  );
};
