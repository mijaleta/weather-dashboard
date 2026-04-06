"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

interface ForecastData {
  list: Array<{
    dt_txt: string;
    main: {
      temp_max: number;
      temp_min: number;
    };
    weather: Array<{
      main: string;
      icon: string;
    }>;
  }>;
}

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData["list"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchCity = async (city: string) => {
    setLoading(true);
    setError("");
    setWeather(null);
    setForecast(null);

    try {
      // Fetch current weather
      const weatherRes = await fetch(
        `/api/weather?city=${encodeURIComponent(city)}`
      );
      if (!weatherRes.ok) {
        throw new Error("City not found");
      }
      const weatherData = await weatherRes.json();
      setWeather(weatherData);

      // Fetch forecast
      const forecastRes = await fetch(
        `/api/forecast?city=${encodeURIComponent(city)}`
      );
      const forecastData = await forecastRes.json();
      setForecast(forecastData.list);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Weather Dashboard
      </h1>
      
      <SearchBar onSearch={searchCity} />

      {loading && (
        <div className="text-center mt-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          <p className="text-white mt-2">Loading weather data...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-500/20 backdrop-blur-md rounded-lg p-4 text-center mt-8">
          <p className="text-white">{error}</p>
          <p className="text-white text-sm mt-1">Try searching for a valid city name</p>
        </div>
      )}

      {weather && (
        <div className="mt-8 max-w-2xl mx-auto">
          <CurrentWeather data={weather} />
          {forecast && <Forecast data={forecast} />}
        </div>
      )}
    </div>
  );
}