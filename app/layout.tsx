import type { Metadata } from "next";
import { Lato, Great_Vibes, Parisienne } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const parisienne = Parisienne({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-parisienne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rachel - Independent Hairstylist",
  description: "Professional hair styling and color services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${greatVibes.variable} ${parisienne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
