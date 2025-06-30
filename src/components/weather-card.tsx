"use client"

import type { CombinedWeatherData } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PixelAvatar } from "./pixel-avatar";
import { getWeatherIcon, HumidityIcon, WindIcon } from "./icons";
import { Separator } from "./ui/separator";

interface WeatherCardProps {
  data: CombinedWeatherData;
  recommendation: string;
}

export const WeatherCard = ({ data, recommendation }: WeatherCardProps) => {
  const { weather, forecast } = data;
  const MainWeatherIcon = getWeatherIcon(weather.weather[0].main);

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-2 border-foreground/20 pixel-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="text-3xl font-bold font-headline">
                    {weather.name}, {weather.sys.country}
                </CardTitle>
                <CardDescription className="text-base">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </CardDescription>
            </div>
            <div className="text-right">
                <p className="text-xl font-bold text-accent">{Math.round(weather.main.temp_max)}°C</p>
                <p className="text-sm text-muted-foreground">{Math.round(weather.main.temp_min)}°C</p>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-end gap-2">
                <p className="text-8xl font-bold font-headline text-foreground">{Math.round(weather.main.temp)}<span className="text-4xl align-top">°C</span></p>
                <div className="flex flex-col items-center">
                    <MainWeatherIcon className="w-12 h-12" />
                    <p className="text-sm capitalize">{weather.weather[0].description}</p>
                </div>
            </div>
            <PixelAvatar weatherCondition={weather.weather[0].main} className="w-40 h-40" />
        </div>
        
        <div className="mt-6 bg-primary/10 p-4 rounded-md border border-primary/20">
            <h3 className="font-bold text-sm mb-1 font-headline">Weather Pal's Tip:</h3>
            <p className="text-sm">{recommendation}</p>
        </div>

        <div className="mt-6 flex justify-around items-center text-sm bg-secondary/50 p-3 rounded-md">
            <div className="flex items-center gap-2">
                <HumidityIcon className="w-5 h-5 text-primary"/>
                <span>{weather.main.humidity}% Humidity</span>
            </div>
             <div className="flex items-center gap-2">
                <WindIcon className="w-5 h-5 text-primary"/>
                <span>{weather.wind.speed.toFixed(1)} km/h Wind</span>
            </div>
        </div>
        
        <Separator className="my-6" />

        <div>
            <h3 className="text-lg font-bold mb-4 font-headline">Hourly Forecast</h3>
            <div className="flex justify-between items-center gap-2 overflow-x-auto pb-2">
                {forecast.list.slice(0, 5).map((item, index) => {
                    const date = new Date(item.dt * 1000);
                    const Icon = getWeatherIcon(item.weather[0].main);
                    return (
                        <div key={index} className="flex flex-col items-center gap-2 flex-1 min-w-[4rem] p-2 rounded-md border border-border">
                            <p className="text-xs text-muted-foreground">{date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })}</p>
                            <Icon className="w-8 h-8"/>
                            <p className="font-bold">{Math.round(item.main.temp)}°C</p>
                        </div>
                    )
                })}
            </div>
        </div>

      </CardContent>
    </Card>
  )
}
