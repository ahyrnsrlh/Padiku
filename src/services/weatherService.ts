import type { WeatherData, ForecastData } from '../types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Mock data for development
const mockWeatherData: WeatherData = {
  weather: [{
    id: 800,
    main: "Clear",
    description: "cerah",
    icon: "01d"
  }],
  main: {
    temp: 30.5,
    feels_like: 32,
    humidity: 75,
    pressure: 1012
  },
  wind: {
    speed: 3.5,
    deg: 120
  },
  dt: Date.now() / 1000,
  name: "Jakarta"
};

const mockForecastData: ForecastData[] = Array(5).fill(null).map((_, i) => ({
  dt: Date.now() / 1000 + i * 3600,
  main: {
    temp: 30 + Math.random() * 2,
    feels_like: 32 + Math.random() * 2,
    humidity: 75,
    pressure: 1012
  },
  weather: [{
    id: 800,
    main: "Clear",
    description: "cerah",
    icon: "01d"
  }],
  wind: {
    speed: 3.5,
    deg: 120
  }
}));

export async function fetchWeatherData(lat: number, lon: number): Promise<WeatherData> {
  // Use mock data if API key is not available
  if (!API_KEY) {
    return new Promise(resolve => setTimeout(() => resolve(mockWeatherData), 1000));
  }

  const response = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&lang=id&appid=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  
  return response.json();
}

export async function fetchForecast(lat: number, lon: number): Promise<ForecastData[]> {
  // Use mock data if API key is not available
  if (!API_KEY) {
    return new Promise(resolve => setTimeout(() => resolve(mockForecastData), 1000));
  }

  const response = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&lang=id&appid=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch forecast data');
  }
  
  const data = await response.json();
  return data.list;
}