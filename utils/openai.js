import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
  baseURL: process.env["BASEURL"],
});

export default async function generator(
  userText,
  godsRestrictions,
  choices,
  allergyRestrictions
) {
  console.log("--------------generating response-----------------");
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `you answer short answers, no yapping. be very strict about ${allergyRestrictions} 
          restrictions, you can suggest alternatives if available. respect religious restrictions if 
          applicable and be careful with allergies. end with a joke about an ingredient the user chose.
          format your answer like that: day: name of day breakfast: content lunch: content dinner: content`,
        },
        {
          role: "user",
          content: `please create a weekly menu as a list, 3 meals a day with
           ${userText}. I keep ${godsRestrictions} rules and ${choices} dietary restrictions. 
           I also have ${allergyRestrictions}`,
        },
      ],
      temperature: 0.4,
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