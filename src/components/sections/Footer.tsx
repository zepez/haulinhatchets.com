import Image from "next/image";
import Link from "next/link";
import { Section } from "~/components/Section";

export const Footer = () => {
  return (
    <Section className="py-3 mt-16 text-xs text-center footer">
      Copyright © 2023 Haulin Hatchets L.L.C.
    </Section>
  );
};
