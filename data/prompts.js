export const schedulePrompt = `create a valid JSON array of objects to list a weekly menu
 with the next structure for every day of the week:
 ["name of the day": {
    breakfast: {
        title: "short title based on the menu",
        ingredients: ["elaborated list the ingredients needed for the recipe, think of details"]
    },
    lunch: {
        title: "short title based on the menu",
        ingredients: ["elaborated list the ingredients needed for the recipe, think of details"]
    },
    dinner: {
        title: "short title based on the menu",
        ingredients: ["elaborated list the ingredients needed for the recipe, think of details"]
    },

 }]
 The JSON object is:`;

// const prompt2 = `Based on the menu: ${generatedMenu}, generate an array of objects representing
//  the weekly menu. use this schema, and include all the days on the menu you recieve:
// ${weekly_menu_template}. please formant the response as JSON. no added words or symbols outside the template. start with the { of the returned object`;

const weekly_menu = [
  {
    day: "day's name",
    breakfast: {
      name: "title of the meal",
      items: ["items for the meal"],
    },
    lunch: {
      name: "title of the meal",
      items: ["items for the meal"],
    },
    dinner: {
      name: "title of the meal",
      items: ["items for the meal"],
    },
  },
];
