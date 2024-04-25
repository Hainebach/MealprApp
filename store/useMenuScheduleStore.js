import { create } from "zustand";
import { persist } from "zustand/middleware";

const storage = {
  getItem: (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : undefined; // Properly parse the JSON when retrieving
  },
  setItem: (name, value) => {
    const stringifiedValue = JSON.stringify(value); // Stringify the JSON when setting
    localStorage.setItem(name, stringifiedValue);
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};
const useMenuScheduleStore = create(
  persist(
    (set) => ({
      menuData: null,
      scheduleData: null,
      setMenuData: (menuData) => {
        console.log("Updating menuData in store to:", menuData);
        set({ menuData });
        console.log("menuData updated in store.");
      },
      setScheduleData: (scheduleData) => {
        console.log("Updating scheduleData in store to:", scheduleData);
        set({ scheduleData });
        console.log("scheduleData updated in store.");
      },
      clearData: () => {
        console.log("Clearing all data in store.");
        set({ menuData: null, scheduleData: null });
        localStorage.removeItem("menu-schedule-storage");
        console.log("All data cleared from store.");
      },
    }),
    {
      name: "menu-schedule-storage",
      storage,
    }
  )
);

// const useMenuScheduleStore = create(
//   persist(
//     (set) => ({
//       menuData: null,
//       scheduleData: null,
//       setMenuData: (menuData) => set({ menuData }),
//       setScheduleData: (scheduleData) => set({ scheduleData }),
//       clearData: () => {
//         set({ menuData: null, scheduleData: null });
//         localStorage.removeItem("menu-schedule-storage");
//       },
//     }),
//     {
//       name: "menu-schedule-storage",
//       storage, // ensure that serialization/deserialization is handled if needed
//     }
//   )
// );

export default useMenuScheduleStore;
