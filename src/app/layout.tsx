import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BIZENIX | Student Entrepreneurship Platform",

  description:
    "BIZENIX is building opportunities for students, freelancers and entrepreneurs through technology, collaboration and innovation.",

  keywords: [
    "BIZENIX",
    "Aditya Chandiramani",
    "Student Entrepreneurship",
    "Navrachana University",
    "IIT Madras",
    "Management and Data Analytics",
    "BCA",
    "Freelancing",
    "Startups",
    "Technology",
  ],

  authors: [
    {
      name: "Aditya Chandiramani",
    },
  ],

  openGraph: {
    title: "BIZENIX",
    description:
      "Building opportunities for students through technology, collaboration and entrepreneurship.",
    url: "https://bizenix.in",
    siteName: "BIZENIX",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
