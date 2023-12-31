import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.scss";
import "@/shared/i18n/i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "George Romashko | Front-end Developer | React, Next.js, TypeScript",
  description: "Добро пожаловать на личный сайт George Romashko",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
