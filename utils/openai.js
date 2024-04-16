const fetch = require("node-fetch");

const BASE_URL = "http://localhost:1234/v1";
const API_KEY = "lm-studio";

export default async function generator(
  userText,
  godsRestrictions,
  choices,
  allergyRestrictions
) {
  const response = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model:
        "bartowski/dolphin-2.8-experiment26-7b-GGUF/dolphin-2.8-experiment26-7b-Q5_K_M.gguf",
      messages: [
        {
          role: "user",
          content: `please create a weekly menu as a list, 3 meals a day with ${userText} 
          I keep ${godsRestrictions} rules and ${choices}dietary restrictions
          I also have ${allergyRestrictions}`,
        },
      ],
      temperature: 0.7,
      // Removed 'stream: true' to avoid streaming the response
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch response from OpenAI API");
  }

  // Handle the response when it's completely received
  const jsonResponse = await response.json();
  console.log("Complete JSON Response:", jsonResponse);

  return jsonResponse;
}
