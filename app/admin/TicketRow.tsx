"use client";

import { useState } from "react";

interface Ticket {
  id: string;
  name: string;
  email: string;
  category: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  bug: "🐛 Chyba",
  question: "❓ Otázka",
  account: "👤 Účet",
  data: "🗂️ Data",
  other: "💬 Jiné",
};

const STATUS_STYLES: Record<string, { bg: string; color: string; label: string }> = {
  new: { bg: "#eff6ff", color: "#2563eb", label: "Nový" },
  open: { bg: "#fefce8", color: "#ca8a04", label: "Otevřený" },
  closed: { bg: "#f0fdf4", color: "#16a34a", label: "Vyřešený" },
};

export default function TicketRow({ ticket }: { ticket: Ticket }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(ticket.status);
  const [saving, setSaving] = useState(false);

  const st = STATUS_STYLES[status] ?? STATUS_STYLES.new;
  const cat = CATEGORY_LABELS[ticket.category] ?? ticket.category;
  const date = new Date(ticket.createdAt).toLocaleString("cs-CZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  async function changeStatus(newStatus: string) {
    setSaving(true);
    await fetch("/api/admin/ticket-status", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: ticket.id, status: newStatus }),
    });
    setStatus(newStatus);
    setSaving(false);
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <button
        className="w-full text-left px-6 py-4 flex items-start gap-4 hover:bg-slate-50 transition"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: st.bg, color: st.color }}
            >
              {st.label}
            </span>
            <span className="text-xs text-slate-400">{cat}</span>
            <span className="text-xs text-slate-400 ml-auto">{date}</span>
          </div>
          <p className="font-semibold text-slate-800 truncate">{ticket.title}</p>
          <p className="text-sm text-slate-500 truncate">
            {ticket.name ? `${ticket.name} · ` : ""}{ticket.email}
          </p>
        </div>
        <span className={`text-slate-400 mt-1 transition-transform shrink-0 ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="px-6 pb-6 border-t border-slate-100">
          <div className="grid sm:grid-cols-2 gap-4 mt-4 mb-4">
            <div>
              <p className="text-xs text-slate-400 mb-0.5">Odesílatel</p>
              <p className="text-sm font-medium text-slate-800">{ticket.name || "—"}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-0.5">E-mail</p>
              <a
                href={`mailto:${ticket.email}`}
                className="text-sm font-medium hover:underline"
                style={{ color: "#8756F6" }}
              >
                {ticket.email}
              </a>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-0.5">Kategorie</p>
              <p className="text-sm text-slate-800">{cat}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-0.5">ID ticketu</p>
              <p className="text-xs font-mono text-slate-500 break-all">{ticket.id}</p>
            </div>
          </div>

          <div className="mb-5">
            <p className="text-xs text-slate-400 mb-1.5">Popis</p>
            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap bg-slate-50 rounded-xl px-4 py-3">
              {ticket.description}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-500 mr-1">Změnit stav:</span>
            {["new", "open", "closed"].map((s) => {
              const sst = STATUS_STYLES[s];
              return (
                <button
                  key={s}
                  disabled={status === s || saving}
                  onClick={() => changeStatus(s)}
                  className="text-xs font-semibold px-3 py-1 rounded-full border transition disabled:opacity-40"
                  style={
                    status === s
                      ? { background: sst.bg, color: sst.color, borderColor: sst.color }
                      : { background: "white", color: "#64748b", borderColor: "#e2e8f0" }
                  }
                >
                  {sst.label}
                </button>
              );
            })}
            <a
              href={`mailto:${ticket.email}?subject=Re: ${encodeURIComponent(ticket.title)}`}
              className="ml-auto text-xs font-semibold px-3 py-1 rounded-full text-white hover:opacity-90 transition"
              style={{ background: "#8756F6" }}
            >
              ✉️ Odpovědět
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
