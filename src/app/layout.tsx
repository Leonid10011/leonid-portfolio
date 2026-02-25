import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "@/src/styles/global.css";
import  { Saira, Inter } from "next/font/google";

const fontHeading = Saira({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-heading",
  display: "swap",
});

const fontBody = Inter({
  subsets: ["latin"],
  weight: ["300","400","500"],
  variable: "--font-body",
  display: "swap",
})

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leonid Design | Frontend Developer',
  description: 'Frontend Developer focused on design and architecture. I build fast, scalable websites with Next.js and WordPress.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
