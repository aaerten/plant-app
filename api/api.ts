import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummy-api-jtg6bessta-ey.a.run.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getData = async (endpoint: string) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
