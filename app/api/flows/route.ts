import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // might be saved to db here later still outlining the state of the flow
  return NextResponse.json({ status: "ok", saved: body });
}
