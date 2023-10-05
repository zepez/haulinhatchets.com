import "./globals.css";
import { Footer } from "~/components/sections/Footer";
import { Header } from "~/components/sections/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
