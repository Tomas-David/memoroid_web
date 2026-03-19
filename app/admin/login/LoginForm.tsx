"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.replace("/admin");
    } else {
      const data = await res.json();
      setError(data.error ?? "Přihlášení selhalo.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          Heslo
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoFocus
          placeholder="Admin heslo"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8756F6] focus:border-transparent transition"
        />
      </div>

      {error && (
        <div
          className="px-4 py-3 rounded-xl text-sm font-medium"
          style={{ background: "#fff0f0", color: "#F65555" }}
        >
          ⚠️ {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl text-white font-semibold hover:opacity-90 disabled:opacity-60 transition"
        style={{ background: "#8756F6" }}
      >
        {loading ? "Přihlašuji..." : "Přihlásit se"}
      </button>
    </form>
  );
}
