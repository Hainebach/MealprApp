import { create } from "zustand";

const useMenuScheduleStore = create((set) => ({
  menuData: null,
  setMenuData: (menuData) => set({ menuData }),
  scheduleData: null,
  setScheduleData: (scheduleData) => set({ scheduleData }),
}));

export default useMenuScheduleStore;
