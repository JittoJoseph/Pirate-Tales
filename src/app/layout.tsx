import type { Metadata } from "next";
import { Pirata_One, IM_Fell_English_SC } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pirataOne = Pirata_One({
  variable: "--font-pirata-one",
  subsets: ["latin"],
  weight: "400",
});

const imFellEnglish = IM_Fell_English_SC({
  variable: "--font-im-fell-english",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Captain's Treasure Shop",
  description: "Premium pirate goods and treasures for seafaring adventures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pirataOne.variable} ${imFellEnglish.variable} antialiased min-h-screen flex flex-col`}
      >
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
