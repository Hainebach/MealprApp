import OpenAI from "openai";
import { weekly_menu_template } from "../../data/weekly_menu_template";
import { schedulePrompt } from "../../data/prompts";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
  // baseURL: process.env["BASEURL"],
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
