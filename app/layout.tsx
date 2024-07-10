import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Procounts Kenya",
  description: "Finance as a service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header2 />
        {children}
        <Footer />
        
        </body>
    </html>
  );
}
