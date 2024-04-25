import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
  baseURL: process.env["BASEURL"],
});

export default async function handler(req, res) {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "return answer as an array of objects",
      },
      {
        role: "user",
        content: "create a vegetarian menu for the entire week starting monday",
      },
    ],
  });

  res.status(200).json(chatCompletion.choices[0].message.content);
}
