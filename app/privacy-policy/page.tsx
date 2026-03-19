import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů – Memoroid",
  description: "Zásady ochrany osobních údajů aplikace Memoroid",
};

const LAST_UPDATED = "11. března 2026";
const APP_EMAIL = "support@memoroid.app";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <div className="mb-10">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
          style={{ background: "#f3eeff", color: "#8756F6" }}
        >
          Právní dokumenty
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3">
          Ochrana osobních údajů
        </h1>
        <p className="text-slate-400 text-sm">Naposledy aktualizováno: {LAST_UPDATED}</p>
      </div>

      <div className="prose">
        <p>
          Vítej v aplikaci <strong>Memoroid</strong>. Ochrana tvého soukromí je pro nás
          prioritou. Tento dokument vysvětluje, jaké osobní údaje shromažďujeme, proč je
          sbíráme a jak je chráníme.
        </p>

        <h2>1. Správce osobních údajů</h2>
        <p>
          Správcem osobních údajů je vývojář aplikace Memoroid. V případě dotazů nás
          kontaktuj na adrese{" "}
          <a href={`mailto:${APP_EMAIL}`}>{APP_EMAIL}</a>.
        </p>

        <h2>2. Jaké údaje shromažďujeme</h2>
        <h3>2.1 Údaje poskytnuté uživatelem</h3>
        <ul>
          <li>E-mailová adresa a heslo (při registraci e-mailem)</li>
          <li>Uživatelské jméno (zobrazované jméno)</li>
          <li>Profilová fotografie (volitelné, přes Google/Apple přihlášení)</li>
          <li>Obsah vytvořených sad otázek a kartiček</li>
        </ul>

        <h3>2.2 Automaticky sbírané údaje</h3>
        <ul>
          <li>Statistiky učení (streak, počet opakování, přesnost odpovědí)</li>
          <li>XP body, úroveň a odemčené odznaky</li>
          <li>Datum a čas aktivit v aplikaci</li>
          <li>Typ zařízení a operační systém (anonymně)</li>
        </ul>

        <h3>2.3 Údaje třetích stran</h3>
        <ul>
          <li>
            Při přihlášení přes Google nebo Apple obdržíme jméno, e-mail a profilovou
            fotografii z příslušného účtu.
          </li>
        </ul>

        <h2>3. Účel zpracování</h2>
        <ul>
          <li>Provoz aplikace a správa uživatelského účtu</li>
          <li>Synchronizace dat mezi zařízeními</li>
          <li>Zobrazení statistik a pokroku v učení</li>
          <li>Sociální funkce (přátelé, žebříček) – pouze se souhlasem uživatele</li>
          <li>Zasílání push notifikací (pouze s tvým souhlasem)</li>
          <li>Zlepšování aplikace na základě anonymní analytiky</li>
          <li>Vyřizování žádostí o podporu (tickety)</li>
        </ul>

        <h2>4. Právní základ zpracování</h2>
        <p>
          Zpracování osobních údajů je prováděno na základě:
        </p>
        <ul>
          <li>
            <strong>Plnění smlouvy</strong> – pro provoz aplikace a správu účtu (čl. 6
            odst. 1 písm. b GDPR)
          </li>
          <li>
            <strong>Oprávněný zájem</strong> – pro anonymní analytiku a zlepšování kvality
            (čl. 6 odst. 1 písm. f GDPR)
          </li>
          <li>
            <strong>Souhlas</strong> – pro push notifikace (čl. 6 odst. 1 písm. a GDPR)
          </li>
        </ul>

        <h2>5. Sdílení dat</h2>
        <p>
          Tvoje osobní údaje <strong>neprodáváme</strong> třetím stranám. Data mohou být
          sdílena pouze s:
        </p>
        <ul>
          <li>
            <strong>Google Firebase</strong> – cloudové úložiště a autentizace (servery v
            EU nebo USA se standardními smluvními doložkami)
          </li>
          <li>
            <strong>Google Analytics for Firebase</strong> – anonymizovaná analytika
            chování uživatelů
          </li>
          <li>
            <strong>Microsoft Clarity</strong> – anonymní analýza použití (bez osobně
            identifikovatelných údajů)
          </li>
          <li>
            <strong>AI poskytovateli</strong> – obsah otázek odeslaný do AI (Google
            Gemini, Anthropic Claude, OpenAI) je zpracováván dle podmínek příslušného
            poskytovatele; neobsahuje osobní identifikátory
          </li>
        </ul>

        <h2>6. Uchovávání dat</h2>
        <ul>
          <li>Data jsou uchovávána po dobu existence účtu.</li>
          <li>Po smazání účtu jsou osobní data odstraněna do 30 dnů.</li>
          <li>Anonymizované statistiky mohou být uchovávány déle pro interní analytiku.</li>
        </ul>

        <h2>7. Tvá práva (GDPR)</h2>
        <p>Máš právo:</p>
        <ul>
          <li>
            <strong>Přístupu</strong> – požádat o kopii svých osobních údajů
          </li>
          <li>
            <strong>Opravy</strong> – opravit nepřesné údaje
          </li>
          <li>
            <strong>Výmazu</strong> – požádat o smazání účtu a všech dat
          </li>
          <li>
            <strong>Přenositelnosti</strong> – obdržet data ve strojově čitelném formátu
          </li>
          <li>
            <strong>Námitky</strong> – vznést námitku proti zpracování na základě
            oprávněného zájmu
          </li>
          <li>
            <strong>Odvolání souhlasu</strong> – kdykoliv odvolat souhlas s push
            notifikacemi v nastavení zařízení
          </li>
        </ul>
        <p>
          Pro uplatnění práv nás kontaktuj na{" "}
          <a href={`mailto:${APP_EMAIL}`}>{APP_EMAIL}</a> nebo prostřednictvím{" "}
          <a href="/support">formuláře podpory</a>.
        </p>

        <h2>8. Bezpečnost</h2>
        <p>
          Data jsou šifrována při přenosu (TLS) i v klidu (Firebase šifrování). Přístup k
          datům je omezen pouze na autorizované vývojáře prostřednictvím Firebase IAM.
          Hesla jsou hashována a nikdy nejsou ukládána v čitelné podobě.
        </p>

        <h2>9. Děti</h2>
        <p>
          Aplikace není určena dětem mladším 13 let. Pokud zjistíme, že jsme shromáždili
          údaje od dítěte mladšího 13 let bez souhlasu rodiče, tyto údaje neprodleně
          smažeme.
        </p>

        <h2>10. Cookies a sledování</h2>
        <p>
          Mobilní aplikace nepoužívá webové cookies. Webové stránky Memoroid mohou
          používat základní technické cookies nezbytné pro provoz stránky.
        </p>

        <h2>11. Změny zásad</h2>
        <p>
          O podstatných změnách tě budeme informovat v aplikaci nebo na e-mail. Datum
          poslední aktualizace je vždy uvedeno v záhlaví tohoto dokumentu.
        </p>

        <h2>12. Kontakt</h2>
        <p>
          Máš-li dotazy ohledně ochrany osobních údajů, piš na{" "}
          <a href={`mailto:${APP_EMAIL}`}>{APP_EMAIL}</a> nebo využij{" "}
          <a href="/support">formulář podpory</a>.
        </p>
      </div>
    </div>
  );
}
