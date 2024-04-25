import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
  // baseURL: process.env["BASEURL"],
});

export default async function generator(
  userText,
  godsRestrictions,
  choices,
  finalDietaryRestrictions,
  allergyRestrictions
) {
  console.log("--------------generating response-----------------");
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",

      messages: [
        {
          role: "assistant",
          content: `you answer short answers to the point, yet you give a full menu. be very strict about ${allergyRestrictions} 
          restrictions, you can suggest alternatives if available. respect religious restrictions if 
          applicable and be strict about dietary ${choices} and ${finalDietaryRestrictions} if there are any. 
          don't repeat any item more than two consecutive days.
          format your answer for every day of the week like that: breakfast: content, lunch: content, dinner: content
          starting monday. after the list tell a joke about the users ${choices}`,
        },
        {
          role: "user",
          content: `please create a weekly menu as a list, 3 meals a day with
           ${userText}. I keep ${godsRestrictions} rules and ${choices} dietary restrictions. 
           I also have ${allergyRestrictions}`,
        },
      ],
      temperature: 0.6,
    });
    if (response && response.choices && response.choices.length > 0) {
      const jsonResponse = response.choices[0].message.content;
      console.log("Complete JSON Response:", jsonResponse);
      console.log(typeof jsonResponse);

      return jsonResponse;
    } else {
      throw new Error("Failed to fetch response from OpenAI API");
    }
  } catch (error) {
    console.error("error generating menu: ", error);
  }
}
