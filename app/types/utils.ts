type weatherCondition = "sunny" | "cloudy" | "rainy" | "snowy" | "stormy";
type weatherData = {
  temperature: number; // in Celsius
  humidity: number; // in percentage
  condition: weatherCondition;
};
type weatherCardData = {
  title: string;
  icon: string; // URL or class name for the icon
  temperature: number; // in Celsius
  windSpeed: number; // in km/h
};
type weatherCardDataArray = weatherCardData[];

type weatherCardProps = {
  className: string;
  children: React.ReactNode;
};
