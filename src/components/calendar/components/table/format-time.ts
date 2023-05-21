export const formatTime = (hour: number) => {
  const formattedHour = String(hour).length === 1 ? `0${hour}` : hour;

  return `${formattedHour}:00`;
};
