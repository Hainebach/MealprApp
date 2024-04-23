import scheduleGenerator from "../../../utils/menuUtils/scheduleGenerator";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
  // baseURL: process.env["BASEURL"],
});

export default async function handler(request, response) {
  if (request.method === "POST") {
    const { newGeneratedMenu } = request.body;
    console.log("menu in API route: ", newGeneratedMenu);

    try {
      const scheduleData = await scheduleGenerator(newGeneratedMenu);
      console.log("newSchedule: ", scheduleData);
      // const scheduleData = newSchedule.choices[0].message.content;

      response.status(200).json(scheduleData);
      console.log("<<<<<<<<<<<<<<<<<<<<<<< new Schedule: ", scheduleData);
    } catch (error) {
      console.error("Error generating schedule: ", error);
      response
        .status(500)
        .json({ success: false, message: "Error generating schedule" });
    }
  } else {
    response
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }
}
