import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ignatius Filbert Sevilen | Full Stack Engineer",
  description: "Ignatius Filbert Sevilen is a Full Stack Engineer specializing in Next.js, AI-driven solutions, and scalable web applications. Explore my projects and professional experience.",
  keywords: ["Ignatius Filbert Sevilen", "Full Stack Engineer", "Web Developer Portfolio", "Next.js Developer", "Software Engineer Jakarta", "AI Solutions"],
  authors: [{ name: "Ignatius Filbert Sevilen" }],
  creator: "Ignatius Filbert Sevilen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://filbertsevilen.com", // Replace with actual domain if known, or leave as placeholder
    title: "Ignatius Filbert Sevilen | Full Stack Engineer",
    description: "Expertise in building scalable, user-focused web applications and AI-driven solutions with Next.js, Flask, and .NET.",
    siteName: "Ignatius Filbert Sevilen Portfolio",
    images: [
      {
        url: "/images/profile.webp",
        width: 1200,
        height: 630,
        alt: "Ignatius Filbert Sevilen Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignatius Filbert Sevilen | Full Stack Engineer",
    description: "Full Stack Engineer specializing in modern web technologies and AI integration.",
    images: ["/images/profile.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}