export const handleResponse = (menuData, setMenuData) => {
  setMenuData(menuData);
  router.push({
    pathname: "/menu",
    query: { menuData: JSON.stringify(menuData) },
  });
};

export const handleSchedule = (scheduleData, setScheduleData) => {
  setScheduleData(scheduleData);
};
