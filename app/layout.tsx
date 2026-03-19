import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memoroid",
  description: "Chytrá aplikace pro učení s kartičkami a AI",
};

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold" style={{ color: "#8756F6" }}>
            Memoroid
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-[#8756F6] transition-colors">
            Domů
          </Link>
          <Link href="/support" className="hover:text-[#8756F6] transition-colors">
            Podpora
          </Link>
          <Link href="/privacy-policy" className="hover:text-[#8756F6] transition-colors">
            Ochrana dat
          </Link>
        </div>
      </div>
    </nav>
  );
}

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
      <body className={`${geist.variable} antialiased bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
