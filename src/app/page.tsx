/** Byimaan */

import type { Metadata } from "next";
import localFont from "next/font/local";

import variables from "../app/variables.module.scss";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next level animations",
  description: "Next.js app which have next level animations",
};

export default function Home() {
  return (
    <main style={{ fontFamily: geistSans.variable, color: variables.primaryColor, }}>
      Byimaan
    </main>
  );
}
