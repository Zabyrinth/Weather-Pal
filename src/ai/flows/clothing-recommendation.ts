'use server';

/**
 * @fileOverview Clothing recommendation flow based on weather conditions and location.
 *
 * - recommendClothing - A function that returns clothing recommendations for the weather.
 * - ClothingRecommendationInput - The input type for the recommendClothing function.
 * - ClothingRecommendationOutput - The return type for the recommendClothing function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ClothingRecommendationInputSchema = z.object({
  city: z.string().describe('The name of the city for the weather forecast.'),
  weatherCondition: z
    .string()
    .describe('The current weather condition (e.g., sunny, rainy, cloudy).'),
  temperature: z.number().describe('The current temperature in Celsius.'),
});
export type ClothingRecommendationInput = z.infer<
  typeof ClothingRecommendationInputSchema
>;

const ClothingRecommendationOutputSchema = z.object({
  clothingRecommendation: z
    .string()
    .describe('The recommended clothing based on the weather conditions and local fashion.'),
});
export type ClothingRecommendationOutput = z.infer<
  typeof ClothingRecommendationOutputSchema
>;

export async function recommendClothing(
  input: ClothingRecommendationInput
): Promise<ClothingRecommendationOutput> {
  return recommendClothingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'clothingRecommendationPrompt',
  input: {schema: ClothingRecommendationInputSchema},
  output: {schema: ClothingRecommendationOutputSchema},
  prompt: `You are Pixel Pal, a friendly and helpful pixelated character who is an expert stylist. Your recommendations should be fun, brief, and helpful. Based on the weather conditions and temperature for the city, provide a clothing recommendation that considers local fashion trends for that city.

City: {{{city}}}
Weather Condition: {{{weatherCondition}}}
Temperature: {{{temperature}}}°C

Your stylish, local-aware recommendation:`,
});

const recommendClothingFlow = ai.defineFlow(
  {
    name: 'recommendClothingFlow',
    inputSchema: ClothingRecommendationInputSchema,
    outputSchema: ClothingRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
