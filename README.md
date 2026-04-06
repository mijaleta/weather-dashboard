# Weather Dashboard

A modern weather dashboard built with Next.js 16, React 19, and Tailwind CSS v4. Search for any city to view current weather conditions and a 5-day forecast.

## Features

- Search weather by city name
- Display current temperature, feels-like temperature, humidity, and wind speed
- 5-day weather forecast
- Responsive design with gradient background
- Loading states and error handling

## Prerequisites

- Node.js 18+
- OpenWeatherMap API key

## Setup

1. Clone the repository

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   ```

   Get your free API key from [OpenWeatherMap](https://openweathermap.org/api).

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS v4
- TypeScript
- OpenWeatherMap API

## Project Structure

```
app/
├── api/
│   ├── weather/      # Current weather API route
│   └── forecast/     # Forecast API route
├── components/
│   ├── SearchBar.tsx
│   ├── CurrentWeather.tsx
│   └── Forecast.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint