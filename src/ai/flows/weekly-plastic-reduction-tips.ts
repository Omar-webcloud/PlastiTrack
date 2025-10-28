'use server';

/**
 * @fileOverview A flow to generate weekly tips for reducing plastic consumption, including recipe recommendations.
 *
 * - weeklyPlasticReductionTips - A function that generates weekly tips for reducing plastic consumption.
 * - WeeklyPlasticReductionTipsInput - The input type for the weeklyPlasticReductionTips function (currently empty).
 * - WeeklyPlasticReductionTipsOutput - The return type for the weeklyPlasticReductionTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WeeklyPlasticReductionTipsInputSchema = z.object({});
export type WeeklyPlasticReductionTipsInput = z.infer<typeof WeeklyPlasticReductionTipsInputSchema>;

const WeeklyPlasticReductionTipsOutputSchema = z.object({
  tips: z.array(z.string()).describe('A list of weekly tips to reduce plastic consumption.'),
  recipeRecommendation: z.string().describe('A recipe recommendation that minimizes plastic packaging.'),
});
export type WeeklyPlasticReductionTipsOutput = z.infer<typeof WeeklyPlasticReductionTipsOutputSchema>;

export async function weeklyPlasticReductionTips(
  input: WeeklyPlasticReductionTipsInput
): Promise<WeeklyPlasticReductionTipsOutput> {
  return weeklyPlasticReductionTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'weeklyPlasticReductionTipsPrompt',
  input: {schema: WeeklyPlasticReductionTipsInputSchema},
  output: {schema: WeeklyPlasticReductionTipsOutputSchema},
  prompt: `You are an AI assistant providing weekly tips for users to reduce their plastic consumption and suggesting a recipe that minimizes plastic packaging.

Generate a list of actionable tips and a recipe recommendation for the week.

Tips should be practical and easy to implement in daily life.
Recipe recommendation should focus on reducing plastic packaging and promoting sustainable ingredients.

Output the tips as a numbered list and the recipe recommendation as a paragraph.

Example Output:
{
  "tips": [
    "1. Use reusable shopping bags when buying groceries.",
    "2. Avoid single-use plastic water bottles by carrying a reusable water bottle.",
    "3. Choose products with minimal plastic packaging.",
    "4. Recycle plastic items properly.",
    "5. Buy in bulk to reduce packaging waste."
  ],
  "recipeRecommendation": "This week's recipe recommendation is a lentil soup. Lentils are a great source of protein and fiber, and they typically come in minimal plastic packaging. The soup can be made with vegetables sourced from local farmers' markets, further reducing plastic consumption. You can store any leftovers in reusable containers."
}
`,
});

const weeklyPlasticReductionTipsFlow = ai.defineFlow(
  {
    name: 'weeklyPlasticReductionTipsFlow',
    inputSchema: WeeklyPlasticReductionTipsInputSchema,
    outputSchema: WeeklyPlasticReductionTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
