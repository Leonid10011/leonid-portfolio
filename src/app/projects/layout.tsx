import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import "@/src/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Header variant="simple"/>
    {children}
    </>
  );
}
