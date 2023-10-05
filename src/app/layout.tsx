import PlausibleProvider from "next-plausible";
import { Footer } from "~/components/sections/Footer";
import { Header } from "~/components/sections/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="haulinhatchets.com" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
