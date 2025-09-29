export const getGreeting = (): string => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
  
    if (hour < 6) return `${hour}:${minutes} No molestes`;
    if (hour < 12) return `${hour}:${minutes} Buenos días`;
    if (hour < 18) return `${hour}:${minutes} Buenas tardes`;
    return `${hour}:${minutes} Buenas noches`;
  };