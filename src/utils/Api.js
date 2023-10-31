import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_API_URL = "https://api.escuelajs.co/api/v1/auth";
const TASKS_API_URL = "https://api.escuelajs.co/api/v1/tasks";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${AUTH_API_URL}/login`, {
      email,
      password,
    });
    const { access_token, refresh_token } = response.data;

    await AsyncStorage.setItem("access_token", access_token);
    await AsyncStorage.setItem("refresh_token", refresh_token);

    return { access_token, refresh_token };
  } catch (error) {
    throw new Error("Authentication failed");
  }
};

export const saveTasksToStorage = async (tasks) => {
  try {
    await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    throw new Error("Error saving tasks to storage");
  }
};

export const retrieveTasksFromStorage = async () => {
  try {
    const storedTasks = await AsyncStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    throw new Error("Error retrieving tasks from storage");
  }
};

export const fetchUserDetails = async (access_token) => {
  try {
    const response = await axios.get(`${AUTH_API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Error fetching user details");
  }
};
