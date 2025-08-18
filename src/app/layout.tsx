import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Ignatius Filbert Sevilen - Full Stack Engineer",
  description: "Personal portfolio built with Next.js & TailwindCSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}