import type { Metadata } from "next";
import { NTR } from "next/font/google";
import "./globals.css";

const ntr = NTR({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shamim Reza",
  description:
    "A self-taught programmer with a passion for learning and exploring new technologies. I am constantly seeking out opportunities to grow and improve as a programmer.",

  openGraph: {
    title: "Shamim Reza - Software Developer",
    description:
      "A self-taught programmer with a passion for learning and exploring new technologies",
    images: [
      {
        url: "/ogImg.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${ntr.className} antialiased`}>{children}</body>
    </html>
  );
}
