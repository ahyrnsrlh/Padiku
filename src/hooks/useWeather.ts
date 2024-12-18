import { useState, useEffect } from 'react';
import { fetchWeatherData, fetchForecast } from '../services/weatherService';
import type { WeatherData, ForecastData } from '../types/weather';

export function useWeather() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        setIsLoading(true);
        // Default coordinates for Jakarta, Indonesia
        const lat = -6.2088;
        const lon = 106.8456;
        
        const [weather, forecastData] = await Promise.all([
          fetchWeatherData(lat, lon),
          fetchForecast(lat, lon)
        ]);

        setCurrentWeather(weather);
        setForecast(forecastData);
        setError(null);
      } catch (err) {
        setError('Failed to load weather data');
        console.error('Weather data fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadWeatherData();
  }, []);

  return { currentWeather, forecast, isLoading, error };
}