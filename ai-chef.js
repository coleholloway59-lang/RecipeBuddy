export default async function handler(request, response) {
    /*
    Only allow POST requests from the AI Chef page.
    */

    if (request.method !== "POST") {
        return response.status(405).json({
            error: "Method not allowed."
        });
    }

    /*
    The API key will be stored securely in Vercel,
    not inside this public code.
    */

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        return response.status(500).json({
            error: "The OpenAI API key has not been configured."
        });
    }

    try {
        const {
            ingredients,
            request: cookingRequest,
            servings,
            skillLevel,
            mealType,
            dietNotes
        } = request.body || {};

        if (!ingredients && !cookingRequest) {
            return response.status(400).json({
                error:
                    "Please provide ingredients or describe the meal you want."
            });
        }

        const prompt = `
Create one practical, detailed recipe for the user.

AVAILABLE INGREDIENTS:
${ingredients || "No ingredients were listed."}

USER REQUEST:
${cookingRequest || "Create a suitable recipe."}

SERVINGS:
${servings || 1}

COOKING SKILL:
${skillLevel || "Beginner"}

MEAL TYPE:
${mealType || "Any meal"}

DIETARY NOTES OR FOODS TO AVOID:
${dietNotes || "None listed."}

Requirements:

- Make the recipe realistic and safe.
- Use exact ingredient quantities.
- Include a clear recipe name.
- Include a short description.
- Include prep time and cook time.
- Include difficulty.
- Include a category.
- Give detailed, numbered cooking instructions.
- Clearly state internal cooking temperatures when relevant.
- Do not assume the user owns unusual equipment.
- Suggest substitutions when an ingredient may be missing.
- Return only valid JSON matching the requested structure.
`;

        const openAIResponse = await fetch(
            "https://api.openai.com/v1/responses",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },

                body: JSON.stringify({
                    model:
                        process.env.OPENAI_MODEL ||
                        "gpt-5-mini",

                    input: prompt,

                    text: {
                        format: {
                            type: "json_schema",

                            name: "recipe",

                            strict: true,

                            schema: {
                                type: "object",

                                properties: {
                                    name: {
                                        type: "string"
                                    },

                                    description: {
                                        type: "string"
                                    },

                                    category: {
                                        type: "string"
                                    },

                                    servings: {
                                        type: "number"
                                    },

                                    prepTime: {
                                        type: "string"
                                    },

                                    cookTime: {
                                        type: "string"
                                    },

                                    difficulty: {
                                        type: "string"
                                    },

                                    ingredients: {
                                        type: "array",

                                        items: {
                                            type: "string"
                                        }
                                    },

                                    instructions: {
                                        type: "array",

                                        items: {
                                            type: "string"
                                        }
                                    },

                                    tips: {
                                        type: "string"
                                    }
                                },

                                required: [
                                    "name",
                                    "description",
                                    "category",
                                    "servings",
                                    "prepTime",
                                    "cookTime",
                                    "difficulty",
                                    "ingredients",
                                    "instructions",
                                    "tips"
                                ],

                                additionalProperties: false
                            }
                        }
                    }
                })
            }
        );

        const result = await openAIResponse.json();

        if (!openAIResponse.ok) {
            console.error(
                "OpenAI API error:",
                result
            );

            return response.status(
                openAIResponse.status
            ).json({
                error:
                    result.error?.message ||
                    "AI Chef could not create the recipe."
            });
        }

        const outputText = result.output_text;

        if (!outputText) {
            return response.status(500).json({
                error:
                    "AI Chef returned an empty response."
            });
        }

        let recipe;

        try {
            recipe = JSON.parse(outputText);
        } catch (parseError) {
            console.error(
                "Recipe JSON parsing failed:",
                parseError
            );

            return response.status(500).json({
                error:
                    "AI Chef returned an invalid recipe."
            });
        }

        return response.status(200).json({
            recipe: recipe
        });
    } catch (error) {
        console.error(
            "AI Chef server error:",
            error
        );

        return response.status(500).json({
            error:
                "The AI Chef server encountered an error."
        });
    }
}