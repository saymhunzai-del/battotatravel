import { NextRequest, NextResponse } from "next/server";
import { getPackages, savePackages } from "@/lib/packages";
import { isAdmin } from "@/lib/auth";
import type { PackageItem } from "@/lib/packages";

export async function GET() {
  const packages = await getPackages();
  return NextResponse.json(packages);
}

export async function PUT(request: NextRequest) {
  const ok = await isAdmin();
  if (!ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const packages = body as PackageItem[];
    if (!Array.isArray(packages) || packages.length === 0) {
      return NextResponse.json({ error: "Invalid packages" }, { status: 400 });
    }
    await savePackages(packages);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
