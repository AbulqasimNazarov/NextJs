// app/api/login/route.ts
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });

    // Пока без сессий — просто подтверждаем успех. Для реального приложения — выдавать JWT или cookie.
    return NextResponse.json({ success: true, message: "Login successful" });
  } catch (err: any) {
    console.error("LOGIN ERROR:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
