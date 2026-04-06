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

interface CurrentWeatherProps {
  data: WeatherData;
}

export default function CurrentWeather({ data }: CurrentWeatherProps) {
  const tempCelsius = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold">{data.name}</h2>
        <img src={weatherIcon} alt={data.weather[0].description} className="w-24 h-24 mx-auto" />
        <p className="text-6xl font-bold">{tempCelsius}°C</p>
        <p className="text-xl capitalize mt-2">{data.weather[0].description}</p>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <p className="text-sm opacity-80">Feels like</p>
            <p className="text-xl font-semibold">{feelsLike}°C</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Humidity</p>
            <p className="text-xl font-semibold">{data.main.humidity}%</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Wind Speed</p>
            <p className="text-xl font-semibold">{data.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
}