export const detectRange = (key: string) => {
  switch (key) {
    case "daily":
      return "Yesterday";
    case "weekly":
      return "Last Week";
    case "monthly":
      return "Last Month";
    default:
      return "Unknown Range";
  }
};
