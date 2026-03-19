import { getSession } from "@/lib/auth";
import { getAdminDb } from "@/lib/firebase-admin";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  if (!(await getSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, status } = await req.json();
  const allowed = ["new", "open", "closed"];
  if (!id || !allowed.includes(status)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  await getAdminDb().collection("support_tickets").doc(id).update({ status });
  return NextResponse.json({ success: true });
}
