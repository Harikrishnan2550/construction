import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";



const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABC Constructions",
  description: "Modern and reliable construction services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        {children}
        <WhatsAppButton />
         <Footer />
      </body>
    </html>
  );
}
