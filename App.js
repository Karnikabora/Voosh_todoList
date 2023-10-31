import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import HomeScreen from "./src/screens/HomeScreen";
import TaskCreationScreen from "./src/screens/TaskCreationScreen";
import TaskEditScreen from "./src/screens/TaskEditScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TaskCreation" component={TaskCreationScreen} />
        <Stack.Screen name="TaskEdit" component={TaskEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
