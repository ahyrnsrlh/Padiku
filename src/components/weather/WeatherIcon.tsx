import React from 'react';
import { 
  Cloud, 
  CloudRain, 
  CloudLightning, 
  CloudSnow, 
  Sun, 
  CloudDrizzle,
  Cloudy,
  LucideIcon,
  LucideProps
} from 'lucide-react';

interface WeatherIconProps extends Omit<LucideProps, 'icon'> {
  code: number;
  size?: number;
}

export function WeatherIcon({ code, size = 24, ...props }: WeatherIconProps) {
  const getIcon = (): LucideIcon => {
    // Thunderstorm
    if (code >= 200 && code < 300) return CloudLightning;
    // Drizzle
    if (code >= 300 && code < 400) return CloudDrizzle;
    // Rain
    if (code >= 500 && code < 600) return CloudRain;
    // Snow
    if (code >= 600 && code < 700) return CloudSnow;
    // Atmosphere (mist, fog, etc)
    if (code >= 700 && code < 800) return Cloud;
    // Clear
    if (code === 800) return Sun;
    // Clouds
    if (code > 800) return Cloudy;
    
    return Cloud;
  };

  const Icon = getIcon();
  return <Icon size={size} {...props} />;
}