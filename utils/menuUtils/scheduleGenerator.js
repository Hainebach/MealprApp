import OpenAI from "openai";
import { weekly_menu_template } from "../../data/weekly_menu_template";
import { schedulePrompt } from "../../data/prompts";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
  baseURL: process.env["BASEURL"],
});

export default async function scheduleGenerator(generatedMenu) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "assistant",
          content: `based on ${generatedMenu}, ${schedulePrompt}`,
        },
      ],
      temperature: 0.1,
    });
    if (response && response.choices && response.choices.length > 0) {
      const jsonResponse = response.choices[0].message.content;
      console.log("$$$$$$$$$$$$$$$$Complete JSON Response:", jsonResponse);
      console.log(typeof jsonResponse);

      return jsonResponse;
    } else {
      throw new Error("Failed to fetch response from OpenAI API");
    }
  } catch (error) {
    console.error("error generating menu: ", error);
  }
}

//     const response = await openai.chat.completions.create({
//       method: "POST",
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "user",
//           content: `Based on the menu: ${generatedMenu}, generate an array of objects representing
//              the weekly menu. Each object should contain properties for each day of the week
//               (e.g., Monday, Tuesday, etc.) with nested objects for breakfast, lunch, dinner.
//                Each meal object should have properties for the name of the dish and the list
//                 of ingredients as an array.`,
//         },
//       ],
//       temperature: 0.1,
//       // Removed 'stream: true' to avoid streaming the response
//     });

//     if (!response.ok) {
//       throw new Error(
//         "*******Failed to fetch response from OPEN AI API********"
//       );
//     }

//     const processedData = await response.json();
//     console.log("complete JSON response: ", processedData);

//     return processedData;
//   } catch (error) {
//     console.error("^^^^^^^Error processing menu data^^^^^^^^: ", error);
//     throw error;
//   }
// }
