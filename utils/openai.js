// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: "lm-studio",
//   base: "http://localhost:1234/v1",
// });

// export default async function generator() {
//   const stream = await openai.chat.completions.create({
//     model: "gpt-4",
//     messages: [{ role: "user", content: "Say this is a test" }],
//     stream: true,
//   });
//   for await (const chunk of stream) {
//     process.stdout.write(chunk.choices[0]?.delta?.content || "");
//   }
// }

const fetch = require("node-fetch"); // or use axios, fetch for browser

const BASE_URL = "http://localhost:1234/v1";
const API_KEY = "lm-studio";

export default async function generator(formData) {
  const response = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model:
        "bartowski/dolphin-2.8-experiment26-7b-GGUF/dolphin-2.8-experiment26-7b-Q5_K_M.gguf",
      messages: [{ role: "user", content: `I want to eat ${formData}` }],
      temperature: 0.7,
      stream: true,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch response from OpenAI API");
  }

  // Initialize an empty string to accumulate the response chunks
  let responseData = [];

  // Read chunks of data as they arrive
  response.body.on("data", (chunk) => {
    console.log("chunk:", chunk);
    responseData.push(JSON.parse(chunk.toString().substring(6)));
  });

  // Return a promise that resolves when the stream ends
  return new Promise((resolve, reject) => {
    response.body.on("end", () => {
      console.log("Received data:", responseData);
      try {
        // Parse the accumulated response data as JSON
        // const jsonResponse = JSON.stringify(responseData);
        const jsonResponse = responseData;
        console.log(jsonResponse);
        resolve(jsonResponse);
      } catch (error) {
        // If parsing fails, reject the promise
        reject(error);
      }
    });

    // Handle stream errors
    response.body.on("error", (error) => {
      reject(error);
    });
  });
}

// const fetch = require("node-fetch"); // or use axios, fetch for browser

// const BASE_URL = "http://localhost:1234/v1";
// const API_KEY = "lm-studio";

// export default async function generateMenu(formData) {
//   const response = await fetch(`${BASE_URL}/chat/completions`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${API_KEY}`,
//     },
//     body: JSON.stringify({
//       model:
//         "bartowski/dolphin-2.8-experiment26-7b-GGUF/dolphin-2.8-experiment26-7b-Q5_K_M.gguf",
//       messages: [{ role: "user", content: `I want to eat ${formData}` }],
//       temperature: 0.7,
//       stream: true,
//     }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch response from OpenAI API");
//   }

//   const completionChunks = [];
//   const reader = response.body.getReader();
//   let chunk;
//   while (!(chunk = await reader.read()).done) {
//     const chunkText = new TextDecoder().decode(chunk.value);
//     completionChunks.push(chunkText);
//   }

//   return completionChunks.join("");
// }
