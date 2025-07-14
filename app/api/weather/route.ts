import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const lat = req.nextUrl.searchParams.get("lat");
  const lon = req.nextUrl.searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json({ error: "missing lat/lon" }, { status: 400 });
  }

  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,weathercode&timezone=auto&forecast_days=7`
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 400 });
  }
  const data = await res.json();
  return NextResponse.json(data);
}
