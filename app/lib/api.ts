export type WeatherResponse = {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    weathercode: number;
    time: string;
  };
};

export async function fetchWeatherByCoords(
  lat: number,
  lon: number
): Promise<WeatherResponse> {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,weathercode&timezone=auto`
  );

  if (!response) {
    throw new Error("Failed to load data");
  }
  return response.json();
}
