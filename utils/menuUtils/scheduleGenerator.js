const fetch = require("node-fetch");

const BASE_URL = "http://localhost:1234/v1";
const API_KEY = "lm-studio";

export default async function scheduleGenerator(generatedMenu) {
  try {
    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model:
          "bartowski/dolphin-2.8-experiment26-7b-GGUF/dolphin-2.8-experiment26-7b-Q5_K_M.gguf",
        // "TheBloke/airoboros-l2-7b-gpt4-1.4.1-GGUF",
        messages: [
          {
            role: "user",
            content: `Based on the menu: ${generatedMenu}, generate an array of objects representing
             the weekly menu. Each object should contain properties for each day of the week
              (e.g., Monday, Tuesday, etc.) with nested objects for breakfast, lunch, dinner.
               Each meal object should have properties for the name of the dish and the list
                of ingredients as an array.`,
          },
        ],
        temperature: 0,
        // Removed 'stream: true' to avoid streaming the response
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch response from OPEN AI API");
    }

    const processedData = await response.json();
    console.log("complete JSON response: ", processedData);

    return processedData;
  } catch (error) {
    console.error("Error processing menu data:", error);
    throw error;
  }
}
