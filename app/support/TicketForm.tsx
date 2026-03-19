"use client";

import { useState, FormEvent } from "react";

const CATEGORIES = [
  { value: "bug", label: "🐛 Nahlásit chybu" },
  { value: "question", label: "❓ Otázka k funkci" },
  { value: "account", label: "👤 Problém s účtem" },
  { value: "data", label: "🗂️ Žádost o data / výmaz" },
  { value: "other", label: "💬 Jiné" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function TicketForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "bug",
    title: "",
    description: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Neznámá chyba.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Nepodařilo se odeslat. Zkontroluj připojení.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Ticket odeslán!</h3>
        <p className="text-slate-500 mb-6">
          Děkujeme za zprávu. Odpovíme na tvůj e-mail co nejdříve.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", category: "bug", title: "", description: "" });
          }}
          className="px-6 py-2.5 rounded-xl text-white font-semibold hover:opacity-90 transition"
          style={{ background: "#8756F6" }}
        >
          Odeslat další
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Jméno
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jan Novák"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8756F6] focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="jan@email.cz"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8756F6] focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Kategorie
        </label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#8756F6] focus:border-transparent transition bg-white"
        >
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Předmět <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          placeholder="Stručný popis problému"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8756F6] focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Popis <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Popiš svůj problém co nejpodrobněji. Pokud hlásíš chybu, uveď kroky k reprodukci, typ zařízení a verzi aplikace."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8756F6] focus:border-transparent transition resize-none"
        />
      </div>

      {status === "error" && (
        <div className="px-4 py-3 rounded-xl text-sm font-medium" style={{ background: "#fff0f0", color: "#F65555" }}>
          ⚠️ {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 rounded-xl text-white font-semibold text-base hover:opacity-90 disabled:opacity-60 transition"
        style={{ background: "#8756F6" }}
      >
        {status === "loading" ? "Odesílám..." : "Odeslat ticket ✉️"}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Odesláním souhlasíš se zpracováním osobních údajů dle naší{" "}
        <a href="/privacy-policy" className="underline hover:text-[#8756F6]">
          Zásady ochrany osobních údajů
        </a>
        .
      </p>
    </form>
  );
}
