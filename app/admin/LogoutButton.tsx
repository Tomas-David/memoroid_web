"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition"
    >
      Odhlásit se
    </button>
  );
}
