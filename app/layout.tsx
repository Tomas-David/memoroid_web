import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";

const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Memoroid – Multiplatformní pomocník na učení",
  description:
    "Mobilní aplikace Memoroid pomáhá studentům efektivně se učit pomocí flashcards, kvízů a AI tutora. Vytvořena ve Flutteru s využitím Firebase a velkých jazykových modelů.",
  keywords: [
    "Memoroid",
    "mobilní aplikace",
    "učení",
    "flashcards",
    "kvíz",
    "AI tutor",
    "Flutter",
    "Firebase",
    "umělá inteligence",
    "vzdělávání",
    "maturitní práce",
    "multiplatformní aplikace",
  ],
  openGraph: {
    title: "Memoroid – Multiplatformní pomocník na učení",
    description:
      "Mobilní aplikace kombinující flashcards, kvízy a AI tutora pro efektivní učení studentů středních škol.",
    locale: "cs_CZ",
    type: "website",
  },
};




function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-24">
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <span>© {new Date().getFullYear()} Memoroid. Všechna práva vyhrazena.</span>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="hover:text-[#8756F6] transition-colors">
            Ochrana osobních údajů
          </Link>
          <Link href="/support" className="hover:text-[#8756F6] transition-colors">
            Podpora
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className={`${roboto.variable}`}>
        <Navbar />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
