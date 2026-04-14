import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Radhika Jayee | Full Stack Python Developer | %s",
    default:
      "Radhika Jayee | Full Stack Python Developer and AI Application Engineer",
  },
  description:
    "A creative portfolio for Radhika Jayee, built with Next.js, Tailwind CSS, Three.js, and Framer Motion. Explore AI-focused web experiences, game systems, and modern frontend design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
