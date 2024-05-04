import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://haulinhatchets.com"),
  title: "Haulin' Hatchets | Mobile Axe Throwing, Wilson NC",
  description:
    "Haulin' Hatchets L.L.C. is a mobile axe throwing trailer based out of Wilson, North Carolina. We cater to festivals, company outings and private events!",
  category: "Entertainment",
  generator: "Next.js",
  applicationName: "Haulin' Hatchets",
  keywords: [
    "axe throwing",
    "wilson nc",
    "mobile axe throwing",
    "axe throwing trailer",
  ],
  authors: [{ name: "Alexander Zepezauer", url: "https://zepez.dev" }],
  creator: "Alexander Zepezauer",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Haulin' Hatchets | Mobile Axe Throwing, Wilson NC",
    description:
      "Haulin' Hatchets L.L.C. is a mobile axe throwing trailer based out of Wilson, North Carolina. We cater to festivals, company outings and private events!",
    url: "https://haulinhatchets.com",
    siteName: "Haulin' Hatchets",
    images: [
      {
        url: "https://haulinhatchets.com/og.png",
        width: 800,
        height: 600,
        alt: "Haulin' Hatchets Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haulin' Hatchets | Mobile Axe Throwing, Wilson NC",
    description:
      "Haulin' Hatchets L.L.C. is a mobile axe throwing trailer based out of Wilson, North Carolina. We cater to festivals, company outings and private events!",
    creator: "@zepezAlex",
    images: [
      {
        url: "https://haulinhatchets.com/twitter.png",
        alt: "Haulin' Hatchets Twitter Image",
      },
    ],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪓</text></svg>",
  },
  verification: {
    other: {
      creator: ["https://zepez.dev", "https://github.com/zepez"],
    },
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "font-sans")}>
        <PlausibleProvider domain="haulinhatchets.com">
          {children}
        </PlausibleProvider>
      </body>
    </html>
  );
}
