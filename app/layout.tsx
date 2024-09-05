import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "./components/providers";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AcadaBrain",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dracula">
      <link rel="icon" href="/Logo.svg" type="image/svg+xml" />
      <Providers>
        <Header />
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
