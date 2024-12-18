import React from "react";
import { Cloud, Droplets, Wind, Thermometer } from "lucide-react";
import { useWeather } from "../../hooks/useWeather";
import { Card } from "../ui/Card";
import { IconBox } from "../ui/IconBox";
import { WeatherIcon } from "./WeatherIcon";
import {
  formatTemperature,
  formatWindSpeed,
  formatHumidity,
  getWeatherImpact,
} from "../../utils/weatherUtils";

export function WeatherCard() {
  const { currentWeather, forecast, isLoading, error } = useWeather();

  if (isLoading) {
    return (
      <Card className="animate-pulse">
        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <div className="text-center p-6">
          <Cloud className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            Gagal memuat data cuaca
          </p>
        </div>
      </Card>
    );
  }

  if (!currentWeather) {
    return null;
  }

  return (
    <Card>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Cuaca Saat Ini
          </h3>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <WeatherIcon code={currentWeather.weather[0].id} size={48} />
              <div>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">
                  {formatTemperature(currentWeather.main.temp)}°C
                </p>
                <p className="text-gray-600 dark:text-gray-400 capitalize">
                  {currentWeather.weather[0].description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <IconBox icon={Thermometer} />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Temperature
                </p>
                <p className="font-semibold">
                  {formatTemperature(currentWeather.main.feels_like)}°C
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <IconBox icon={Droplets} />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Kelembaban
                </p>
                <p className="font-semibold">
                  {formatHumidity(currentWeather.main.humidity)}%
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <IconBox icon={Wind} />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Angin
                </p>
                <p className="font-semibold">
                  {formatWindSpeed(currentWeather.wind.speed)} km/j
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/30 rounded-xl">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
            Dampak pada Tanaman
          </h4>
          <p className="text-sm text-green-700 dark:text-green-300">
            {getWeatherImpact(currentWeather)}
          </p>
        </div>

        {forecast && forecast.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold mb-4">Prakiraan 24 Jam Kedepan</h4>
            <div className="grid grid-cols-4 gap-2">
              {forecast.slice(0, 4).map((item, index) => (
                <div key={index} className="text-center p-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(item.dt * 1000).getHours()}:00
                  </p>
                  <WeatherIcon
                    code={item.weather[0].id}
                    size={24}
                    className="mx-auto my-2"
                  />
                  <p className="font-semibold">
                    {formatTemperature(item.main.temp)}°C
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
