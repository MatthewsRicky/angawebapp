import { NextRequest, NextResponse } from "next/server";
import { fetchWeatherApi } from "openmeteo";

export async function GET(req: NextRequest) {
  const lat = req.nextUrl.searchParams.get("lat");
  const lon = req.nextUrl.searchParams.get("lon");

  const params = {
    latitude: 1.286389,
    longitude: 36.817223,
    "hourly": "temperature_2m",
  };

  if (!lat || !lon) {
    return NextResponse.json({ error: "missing lat/lon" }, { status: 400 });
  }

  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,weathercode&timezone=auto`
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 400 });
  }
  const data = await res.json();
  return NextResponse.json(data);
}
