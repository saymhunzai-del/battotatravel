import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "BIN BATOOTA TRAVEL & TOURISM",
  description:
    "Established in 1976, BIN BATOOTA TRAVEL & TOURISM is a trusted UAE-based travel partner for corporate and leisure journeys worldwide."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

