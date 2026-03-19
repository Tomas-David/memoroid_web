import Hero from "@/components/hero/Hero";
import Link from "next/link";

const features = [
  {
    icon: "🃏",
    title: "Kartičky",
    desc: "Opakuj látku přes interaktivní flashcardy s animovaným překlopením.",
  },
  {
    icon: "🧠",
    title: "Quiz",
    desc: "Otestuj se v kvízu s výběrem ze čtyř možností a okamžitou zpětnou vazbou.",
  },
  {
    icon: "✨",
    title: "AI generátor",
    desc: "Nahraj fotku poznámek nebo zadej téma – AI vytvoří sadu otázek za tebe.",
  },
  {
    icon: "📊",
    title: "Statistiky",
    desc: "Sleduj streak, týdenní cíl a přesnost odpovědí na přehledných grafech.",
  },
  {
    icon: "👥",
    title: "Přátelé & žebříček",
    desc: "Přidej si přátele a soutěž s nimi o nejvyšší XP na žebříčku.",
  },
  {
    icon: "🏅",
    title: "Gamifikace",
    desc: "Plň denní questy, získávej XP, leveluj a odemykej odznaky.",
  },
];

export default async function Home() {
  return (
    <div>
      <Hero />

      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Vše, co potřebuješ ke studiu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="rounded-3xl mx-4 sm:mx-auto max-w-4xl mb-20 p-10 sm:p-16 text-center text-white"
        style={{ background: "linear-gradient(135deg, #8756F6, #6c3fe0)" }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Začni se učit ještě dnes
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
          Memoroid je zcela zdarma. Žádné předplatné, žádné reklamy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold bg-white hover:bg-slate-100 transition"
            style={{ color: "#8756F6" }}
          >
            📱 App Store
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold border-2 border-white/60 hover:border-white transition text-white"
          >
            🤖 Google Play
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Potřebuješ pomoc?</h2>
        <p className="text-slate-500 mb-6">
          Našel jsi chybu nebo máš otázku? Rádi ti pomůžeme.
        </p>
        <Link
          href="/support"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition hover:opacity-90"
          style={{ background: "#8756F6" }}
        >
          ✉️ Kontaktovat podporu
        </Link>
      </section>
    </div>
  );
}
