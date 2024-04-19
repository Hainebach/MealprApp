import generator from "../../../utils/openai";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
  baseURL: process.env["BASEURL"],
});

export default async function handler(request, response) {
  if (request.method === "POST") {
    const {
      userInput,
      dietaryChoices,
      finalDietaryRestrictions,
      godsRestrictions,
    } = request.body;
    console.log("User Input in API Route:", userInput);

    try {
      const newMenu = await generator(
        userInput,
        godsRestrictions,
        dietaryChoices
      );
      response.status(200).json(newMenu);
      console.log("menu: ", newMenu);
      console.log(typeof newMenu);
    } catch (error) {
      console.error("Error generating menu:", error);
      response
        .status(500)
        .json({ success: false, message: "Error generating menu" });
    }
  } else {
    response
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }
}
