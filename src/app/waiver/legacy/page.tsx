import type { Metadata } from "next";
import { Section } from "~/components/Section";
import { WaiverLegal } from "~/components/waiver/Legal";
import { WaiverForm } from "~/components/waiver/FormLegacy";

export const metadata: Metadata = {
  title: "Waiver | Haulin Hatchets LLC",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪓</text></svg>",
  },
};

export default function Waiver() {
  return (
    <main>
      <Section className="mx-4">
        <WaiverLegal>
          <button className="w-full py-4 mb-8 text-lg font-semibold text-white rounded-md bg-stone-900">
            View Waiver
          </button>
        </WaiverLegal>
        <WaiverForm />
      </Section>
    </main>
  );
}
