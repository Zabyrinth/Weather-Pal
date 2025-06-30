"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getWeatherData } from "@/app/actions";
import { recommendClothing } from "@/ai/flows/clothing-recommendation";
import type { CombinedWeatherData } from "@/lib/types";
import { WeatherCard } from "@/components/weather-card";
import { WeatherCardSkeleton } from "@/components/weather-card-skeleton";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [city, setCity] = useState("London");
  const [weatherState, setWeatherState] = useState<{
    data?: CombinedWeatherData;
    recommendation?: string;
    error?: string;
  }>({});
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!city) return;

    startTransition(async () => {
      setWeatherState({ data: undefined, recommendation: undefined, error: undefined });
      const result = await getWeatherData(city);

      if (result.error) {
        setWeatherState({ error: result.error });
        toast({
            variant: "destructive",
            title: "Error fetching weather",
            description: result.error,
        })
        return;
      }

      if (result.data) {
        try {
            const clothingResponse = await recommendClothing({
              weatherCondition: result.data.weather.weather[0].main,
              temperature: result.data.weather.main.temp,
            });
            setWeatherState({ data: result.data, recommendation: clothingResponse.clothingRecommendation });
        } catch (aiError) {
             setWeatherState({ data: result.data, recommendation: "Could not get a clothing recommendation, but dress for the temperature!" });
        }
      }
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold font-headline tracking-tighter text-foreground">
          Pixel Weather Pal
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your friendly pixelated weather companion.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex w-full gap-2">
          <Input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter a city name..."
            className="flex-grow border-2 border-foreground/20 text-base pixel-shadow-sm focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="City Name"
          />
          <Button
            type="submit"
            disabled={isPending}
            className="border-2 border-foreground/20 font-bold pixel-shadow-sm active:translate-y-0.5 active:translate-x-0.5 active:shadow-none"
          >
            {isPending ? "Searching..." : "Get Weather"}
          </Button>
        </form>
      </div>

      <div className="mt-8 w-full">
        {isPending && <WeatherCardSkeleton />}
        {weatherState.data && weatherState.recommendation && (
          <WeatherCard data={weatherState.data} recommendation={weatherState.recommendation} />
        )}
        {!isPending && !weatherState.data && !weatherState.error && (
            <div className="text-center mt-16 text-muted-foreground">
                <p>Enter a city to see the weather forecast and what to wear!</p>
            </div>
        )}
      </div>
    </main>
  );
}
