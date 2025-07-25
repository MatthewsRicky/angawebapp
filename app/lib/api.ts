export type WeatherResponse = {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    weathercode: number;
    time: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    wind_speed_10m_max: number[];
    weathercode: number[];
  };
  aqi?: {
    european_aqi: number;
  };
};

export async function fetchFullWeather(
  lat: number,
  lon: number
): Promise<WeatherResponse> {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,weathercode&timezone=auto&forecast_days=7`
  );
  const aqiRes = await fetch(
    `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=european_aqi`
  );

  if (!response.ok || !aqiRes.ok) {
    throw new Error("Failed to load weather or AQI data");
  }
  return response.json();
}

export async function fetchCoordsByCity(city: string) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    city
  )}&limit=1`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch coordinates");

  const data = await response.json();

  if (!data || data.length === 0) {
    throw new Error("City not found");
  }

  const { lat, lon } = data[0];
  return {
    lat: parseFloat(lat),
    lon: parseFloat(lon),
  };
}
