interface ForecastItem {
  dt_txt: string;
  main: {
    temp_max: number;
    temp_min: number;
  };
  weather: Array<{
    main: string;
    icon: string;
  }>;
}

interface ForecastProps {
  data: ForecastItem[];
}

export default function Forecast({ data }: ForecastProps) {
  // Get one forecast per day (every 8th item = 24 hours)
  const dailyForecast = data.filter((item, index) => index % 8 === 0).slice(0, 3);

  const getDayName = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <div className="mt-6">
      <h3 className="text-white text-xl font-semibold text-center mb-4">3-Day Forecast</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dailyForecast.map((day, index) => (
          <div key={index} className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-white text-center">
            <p className="font-semibold text-lg">{getDayName(day.dt_txt)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].main}
              className="w-16 h-16 mx-auto"
            />
            <p className="text-2xl font-bold">{Math.round(day.main.temp_max)}°</p>
            <p className="text-sm opacity-80">{Math.round(day.main.temp_min)}°</p>
            <p className="text-sm capitalize mt-1">{day.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
}