import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin – Memoroid",
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#f8f6ff" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-2xl mb-4"
            style={{ background: "#8756F6" }}
          >
            🔐
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">Admin panel</h1>
          <p className="text-slate-500 text-sm mt-1">Memoroid Support</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
