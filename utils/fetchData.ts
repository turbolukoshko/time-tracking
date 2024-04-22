import { API_URL, OPTIONS } from "./../constants/constants";

export const fetchData = async <T>(): Promise<T> => {
  try {
    const response = await fetch(API_URL, OPTIONS);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    
    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
