'use server';

import { CombinedWeatherData, WeatherData, ForecastData } from '@/lib/types';

const API_KEY = '5e57380012e3328d8856c73abeca69da';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export async function getWeatherData(city: string): Promise<{ data?: CombinedWeatherData; error?: string }> {
  if (!city) {
    return { error: 'City cannot be empty.' };
  }

  try {
    const weatherResponse = await fetch(`${WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!weatherResponse.ok) {
        const errorData = await weatherResponse.json();
        throw new Error(errorData.message || 'Failed to fetch weather data.');
    }
    const weatherData: WeatherData = await weatherResponse.json();

    const forecastResponse = await fetch(`${FORECAST_API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     if (!forecastResponse.ok) {
        const errorData = await forecastResponse.json();
        throw new Error(errorData.message || 'Failed to fetch forecast data.');
    }
    const forecastData: ForecastData = await forecastResponse.json();

    return { data: { weather: weatherData, forecast: forecastData } };
  } catch (error) {
    if (error instanceof Error) {
        if (error.message === 'city not found') {
            return { error: `Could not find weather for "${city}". Please check the spelling.` };
        }
        return { error: error.message };
    }
    return { error: 'An unknown error occurred.' };
  }
}
