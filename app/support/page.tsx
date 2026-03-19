import type { Metadata } from "next";
import TicketForm from "./TicketForm";

export const metadata: Metadata = {
  title: "Podpora – Memoroid",
  description: "Kontaktuj tým Memoroid s dotazem nebo nahlášením chyby",
};

const FAQ = [
  {
    q: "Jak synchronizovat data mezi zařízeními?",
    a: "Přihlas se stejným účtem na obou zařízeních. Data se automaticky synchronizují přes cloud.",
  },
  {
    q: "Jak smazat svůj účet?",
    a: "Přejdi do Nastavení → Účet → Smazat účet. Nebo nás kontaktuj přes formulář níže s kategorií \u201eŽádost o data / výmaz\u201c.",
  },
  {
    q: "AI negeneruje správné otázky – co dělat?",
    a: "Zkontroluj kvalitu fotografie nebo přesnost textu zadaného tématu. Pomáhá také zvolit jiný AI model v nastavení.",
  },
  {
    q: "Notifikace mi nefungují.",
    a: "Zkontroluj v systémovém nastavení oprávnění notifikací pro Memoroid. Čas připomínky lze nastavit v aplikaci v Nastavení → Notifikace.",
  },
  {
    q: "Ztratil/a jsem streak – mohu ho obnovit?",
    a: "Streaky bohužel nelze manuálně obnovit. Udrž si ho zaznamenáním alespoň jednoho opakování denně.",
  },
];

export default function SupportPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      <div className="text-center mb-14">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
          style={{ background: "#f3eeff", color: "#8756F6" }}
        >
          Podpora
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3">
          Jak ti můžeme pomoci?
        </h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          Nahlásit chybu, položit otázku nebo požádat o smazání dat – jsme tu pro tebe.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Odeslat ticket</h2>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <TicketForm />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6">Časté otázky</h2>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-slate-800 text-sm select-none">
                  {item.q}
                  <span className="ml-3 text-slate-400 group-open:rotate-180 transition-transform shrink-0">
                    ▾
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div
            className="mt-8 rounded-2xl p-6"
            style={{ background: "#f3eeff" }}
          >
            <h3 className="font-bold text-slate-800 mb-1">Přímý kontakt</h3>
            <p className="text-sm text-slate-500 mb-3">
              Pokud dáváš přednost e-mailu, napiš nám přímo:
            </p>
            <a
              href="mailto:support@memoroid.app"
              className="text-sm font-semibold hover:underline"
              style={{ color: "#8756F6" }}
            >
              support@memoroid.app
            </a>
            <p className="text-xs text-slate-400 mt-2">
              Odpovídáme obvykle do 2 pracovních dnů.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
