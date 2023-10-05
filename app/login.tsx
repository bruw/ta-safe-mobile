import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import useToken from "../states/useToken";

export default function _Screen() {
  const router = useRouter();
  const { setToken } = useToken();

  const handleLogin = async () => {
    setToken('ABC');
    router.push("/(auth)/home");
  };

  return (
    <View>
      <Text>login</Text>
      <Button title="login" onPress={handleLogin} />
    </View>
  );
}
