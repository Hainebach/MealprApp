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
          role: "system",
          content: `Generate a weekly meal plan that adheres to specified dietary restrictions, religious observances, 
          and allergy considerations. Each day should include three meals: breakfast, lunch, and dinner. 
          Avoid repetition of any meal more than twice consecutively. Format the plan starting from Monday. 
          If the user input is 'anything', provide a diverse menu within the given constraints.`,
        },
        {
          role: "assistant",
          content: `I will create a meal plan that strictly follows the user's dietary choices: ${choices},
          any specific dietary restrictions like ${finalDietaryRestrictions}, and any allergy considerations
           like ${allergyRestrictions}. I will also respect ${godsRestrictions} religious dietary laws.`,
        },
        {
          role: "user",
          content: `${
            userText === "anything"
              ? "Generate a meal plan for a week without specific food preferences."
              : "Generate a meal plan for a week with the following preference: " +
                userText
          }. I follow ${godsRestrictions} rules,
           my diet is ${choices}, and I have the following allergies: ${allergyRestrictions}.`,
        },
      ],
      temperature: 0.8,
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
