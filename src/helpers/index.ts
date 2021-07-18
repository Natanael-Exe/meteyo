export const formatTime = (
  date: number,
  timezone: number,
  midday: string
): string => {
  if (date && timezone) {
    const utcDate = new Date(date * 1000);
    const hours: number = utcDate.getHours();
    const minutes: number = utcDate.getMinutes();
    return `${hours}:${minutes} ${midday}`;
  } else {
    return "--";
  }
};

export const getPercentIndicator = (humidity: number) => {
  if (humidity) {
    if (humidity < 20) return "mt-9";
    if (humidity < 40) return "mt-8";
    if (humidity < 50) return "mt-6";
    if (humidity < 60) return "mt-4";
    if (humidity < 80) return "mt-2";
  } else {
    return "mt-10";
  }
};
