import React from "react";
import { View, Text } from "react-native";
import LoginForm from "../components/LoginForm";
import { login } from "../utils/Api";

const LoginScreen = ({ navigation }) => {
  const handleLogin = async (email, password) => {
    try {
      const { access_token, refresh_token } = await login(email, password);

      navigation.navigate("Profile", { access_token, refresh_token });
    } catch (error) {
      console.error("Authentication failed:", error.message);
    }
  };

  return (
    <View>
      <Text>Welcome to the Login Screen</Text>
      <LoginForm onLogin={handleLogin} />
    </View>
  );
};

export default LoginScreen;
