import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import localFont from "next/font/local";
import ToasterProvider from "./providers/ToasterProvider";
import ClientOnly from "./components/ClientOnly";
import Footer from "./components/Footer/Footer";

const cubanoFont = localFont({
  src: "../../public/fonts/Cubano.ttf", // adjust path as needed
  variable: "--font-cubano",
  weight: "400", // optional if your font has weights
  style: "normal", // optional
});

export const metadata: Metadata = {
  title: "CAY KHE",
  description: "Cay Khe Abingdon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cubanoFont.className}>
      <body>
        <ClientOnly >
          <ToasterProvider />
        </ClientOnly>
        <Navbar />
        <div className="pb-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
