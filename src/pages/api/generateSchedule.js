import scheduleGenerator from "../../../utils/menuUtils/scheduleGenerator";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const { generatedMenu } = request.body;
    console.log("menu in API route: ", generatedMenu);

    try {
      const newSchedule = await scheduleGenerator(generatedMenu);
      console.log("newSchedule: ", newSchedule);
      const scheduleData = newSchedule.choices[0].message.content;

      response.status(200).json({
        success: true,
        message: "Schedule generated succesfully",
        scheduleData,
      });
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
