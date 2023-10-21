import { Stack, useRouter } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";

import useToken from "../../states/useToken";

export default function _Screen() {
  const router = useRouter();
  const { setToken } = useToken();

  const handleLogout = async () => {
    setToken();
    router.replace("/");
  };

  return (
    <View>
      <Stack.Screen options={{ title: "Home" }} />
      <Text>home</Text>
      <Button title="logout" onPress={handleLogout} />
    </View>
  );
}
