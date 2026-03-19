import { getAdminDb } from "@/lib/firebase-admin";

export const dynamic = "force-dynamic";
import LogoutButton from "./LogoutButton";
import TicketRow from "./TicketRow";

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

async function getTickets(): Promise<Ticket[]> {
  const snap = await getAdminDb()
    .collection("support_tickets")
    .orderBy("createdAt", "desc")
    .get();

  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Ticket));
}

export default async function AdminPage() {
  const tickets = await getTickets();

  const counts = {
    new: tickets.filter((t) => t.status === "new").length,
    open: tickets.filter((t) => t.status === "open").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  };

  return (
    <div className="min-h-screen" style={{ background: "#f8f6ff" }}>
      <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm"
              style={{ background: "#8756F6", color: "white" }}
            >
              M
            </span>
            <span className="font-bold text-slate-800">Memoroid Admin</span>
            <span className="text-slate-300">·</span>
            <span className="text-sm text-slate-500">Support tickety</span>
          </div>
          <LogoutButton />
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Nové", count: counts.new, bg: "#eff6ff", color: "#2563eb" },
            { label: "Otevřené", count: counts.open, bg: "#fefce8", color: "#ca8a04" },
            { label: "Vyřešené", count: counts.closed, bg: "#f0fdf4", color: "#16a34a" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-4"
            >
              <p className="text-sm text-slate-500 mb-1">{s.label}</p>
              <p className="text-3xl font-extrabold" style={{ color: s.color }}>
                {s.count}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-800">
            Všechny tickety
            <span className="ml-2 text-sm font-normal text-slate-400">({tickets.length})</span>
          </h2>
        </div>

        {tickets.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-slate-500">Zatím žádné tickety.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {tickets.map((ticket) => (
              <TicketRow key={ticket.id} ticket={ticket} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
