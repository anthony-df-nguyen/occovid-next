import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OCCOVID",
  description:
    "Historical data archived tracking the COVID-19 outbreak in Orange County, California from 2020 to 2023.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-M7D9TVZ4" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
