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
      setMenuData: (menuData) => set({ menuData }),
      setScheduleData: (scheduleData) => set({ scheduleData }),
      clearData: () => {
        set({ menuData: null, scheduleData: null });
        localStorage.removeItem("menu-schedule-storage");
      },
    }),
    {
      name: "menu-schedule-storage",
      storage, // ensure that serialization/deserialization is handled if needed
    }
  )
);

export default useMenuScheduleStore;
