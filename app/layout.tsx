import "./globals.css";

import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Mercadito Liebre",
  description: "practica ecommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //todo falta usar sass, react, migasde pan seo en react express servidor

  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="max-x-screen-xl p-4">{children}</main>
      </body>
    </html>
  );
}
