import generator from "../../../utils/openai";
import OpenAI from "openai";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const { userInput } = request.body;
    console.log("User Input in API Route:", userInput);

    try {
      const newMenu = await generator(userInput);
      console.log("generated menu: ", newMenu);
      response.status(200).json({
        success: true,
        message: "Menu generated succsesfuly",
        newMenu,
      });
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
