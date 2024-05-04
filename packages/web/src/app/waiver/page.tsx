import type { Metadata } from "next";
import { Legal } from "@/components/waiver/legal";
import { Sign } from "@/components/waiver/sign";

export const metadata: Metadata = {
  title: "Waiver | Haulin' Hatchets",
};

export default function Waiver() {
  return (
    <main className="flex flex-col gap-16 pt-24">
      <Legal />
      <Sign />
    </main>
  );
}
