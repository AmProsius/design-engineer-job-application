import { clsx } from "clsx";
import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "Next.js Boilerplate",
  description: "Authored by Fabian Bastwöste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          "flex min-h-dvh flex-col px-4 py-6 font-inter text-gray-600 lg:py-8 dark:bg-gray-900 dark:text-gray-400",
          inter.variable,
          robotoSlab.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
