import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import TaskCreationScreen from "../screens/TaskCreationScreen";
import TaskEditScreen from "../screens/TaskEditScreen";
import NewTaskForm from "../screens/NewTaskForm";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TaskCreation" component={TaskCreationScreen} />
        <Stack.Screen name="TaskEdit" component={TaskEditScreen} />
        <Stack.Screen name="NewTaskForm" component={NewTaskForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
