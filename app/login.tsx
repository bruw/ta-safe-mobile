import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import useToken from "../states/useToken";
import api from "../services/api";
import { TextInput } from "react-native-gesture-handler";

export default function _Screen() {
  const router = useRouter();
  const { setToken } = useToken();
  const [errors, setErrors] = useState<{
    message: string;
    errors: {
      [key: string]: string[];
    };
  }>();

  const handleLogin = async () => {
    try {
      const response = await api.post("/api/login", {
        email: "user1@email.com",
        password: "12345678s",
      });

      setToken(response.data.token);

      router.push("/(auth)/home");
    } catch (error: any) {
      // console.log(JSON.stringify(error.response.data, null, 2));
      setErrors(error.response.data);
    }
  };

  console.log(errors?.errors.email.map((e) => e));

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>login</Text>

      {errors?.message && (
        <Text style={{ backgroundColor: "red" }}>{errors.message}</Text>
      )}

      {/* <LaravelMessageError error={errors?.message} /> */}

      <TextInput
        style={{ width: "100%", height: 32, backgroundColor: "grey" }}
      />

      {/* <LaravelAttributeError error={errors?.errors.email} /> */}

      {errors?.errors.email &&
        errors.errors.email.map((error) => (
          <Text style={{ fontSize: 10, color: "orange" }}>{error}</Text>
        ))}

      <Button title="login" onPress={handleLogin} />
    </View>
  );
}
