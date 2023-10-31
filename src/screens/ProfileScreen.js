import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const ProfileScreen = ({ navigation, access_token, onLogout }) => {
  const [userDetails, setUserDetails] = useState({});

  const fetchUserDetails = async () => {
    try {
      // TODO: Fetch user details from the API using access_token
      // Update the userDetails state with the retrieved data
    } catch (error) {
      // Handle errors
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    // TODO: To implement logout logic here
    console.log("Logout logic");
  };

  const handleAddNewTask = () => {
    navigation.navigate("NewTaskForm");
  };

  return (
    <View>
      <Text>Profile Page</Text>
      <Text>Name: {userDetails.name}</Text>
      <Text>Email: {userDetails.email}</Text>
      <Button title="Add New Task" onPress={handleAddNewTask} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;
