import React from "react";
import { View, Text, Button } from "react-native";

const UserProfile = ({ onLogout }) => {
  return (
    <View>
      <Text>User Profile</Text>

      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

export default UserProfile;
