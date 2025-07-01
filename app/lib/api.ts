export type WeatherResponse = {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    weathercode: number;
    time: string;
  };
  daily: {
    time: string[]; // e.g., ["2024-06-27", ...]
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    wind_speed_10m_max: number[];
    weathercode: number[];
  };
};

export async function fetchFullWeather(
  lat: number,
  lon: number
): Promise<WeatherResponse> {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,weathercode&timezone=auto&forecast_days=7`
  );

  if (!response) {
    throw new Error("Failed to load data");
  }
  return response.json();
}
