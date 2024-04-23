export const tools = [
  {
    type: "function",
    function: {
      name: "createWeeklySchedule",
      description:
        "Extract information from the given menu to create a weekly schedule",
      parameters: {
        type: "object",
        properties: {
          day: {
            type: "object",
            description:
              "An object containing breakfast, lunch, and dinner for the day. name based on the day's name.",
            properties: {
              breakfast: {
                type: "object",
                description:
                  "An object containing the title and ingredients for breakfast",
                properties: {
                  title: {
                    type: "string",
                    description: "create a short title based on the meal",
                  },
                  ingredients: {
                    type: "array",
                    items: {
                      type: "string",
                      description:
                        "List in detail the ingredients needed for preparing the suggested meal",
                    },
                  },
                },
                required: ["title", "ingredients"],
              },
              lunch: {
                type: "object",
                description:
                  "An object containing the title and ingredients for lunch",
                properties: {
                  title: {
                    type: "string",
                    description: "create a short title based on the meal",
                  },
                  ingredients: {
                    type: "array",
                    items: {
                      type: "string",
                      description:
                        "List in detail the ingredients needed for preparing the suggested meal",
                    },
                  },
                },
                required: ["title", "ingredients"],
              },
              dinner: {
                type: "object",
                description:
                  "An object containing the title and ingredients for dinner",
                properties: {
                  title: {
                    type: "string",
                    description: "create a short title based on the meal",
                  },
                  ingredients: {
                    type: "array",
                    items: {
                      type: "string",
                      description:
                        "List in detail the ingredients needed for preparing the suggested meal",
                    },
                  },
                },
                required: ["title", "ingredients"],
              },
            },
            required: ["breakfast", "lunch", "dinner"],
          },
        },
        required: ["day"],
      },
    },
  },
];
