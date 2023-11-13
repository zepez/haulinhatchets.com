import { Grid } from "~/components/sections/Grid";
import { Calendar } from "~/components/sections/Calendar";
import { Contact } from "~/components/sections/Contact";
import type { Metadata } from "next";

const title = "Haulin Hatchets - Mobile Axe Throwing";
const description =
  "Haulin Hatchets LLC is a mobile axe throwing company based out of Wilson, North Carolina";

export const metadata: Metadata = {
  title,
  description,

  keywords: ["axe throwing", "mobile axe throwing"],
  authors: [{ name: "Alex Zepezauer", url: "zep.sh" }],

  openGraph: {
    title,
    description,
    url: "https://haulinhatchets.com",
    siteName: "Haulin Hatchets LLC",
    images: [
      {
        // TODO: Add facebook image
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    // TODO: Add twitter image
    images: ["https://nextjs.org/og.png"],
  },

  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪓</text></svg>",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export default function Home() {
  return (
    <main>
      <Grid />
      <Calendar />
      <div className="section-separator h-[100px] my-8 md:h-[250px] md:my-0" />
      <Contact />
    </main>
  );
}
