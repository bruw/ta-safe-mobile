import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import useToken from "../states/useToken";
import api from "../services/api";


// "message": "Essas credenciais não foram encontradas em nossos registros.",
// "errors": {
//   "email": [
//     "Essas credenciais não foram encontradas em nossos registros."
//   ]

export default function _Screen() {
  const router = useRouter();
  const { setToken } = useToken();
  const [errors, setErrors] = useState<{message:string, errors:{
    [error: string]: string[]
  }}>();

  const handleLogin = async () => {
    try {
      const response = await api.post("/api/login", {
        email: "user1@email.com",
        password: "1234567",
      });

      setToken(response.data.token);

      router.push("/(auth)/home");
    } catch (error: any) {
      console.log(JSON.stringify(error.response.data, null, 2));
    }
  };

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>login</Text>

      <Text>{errors?.message}</Text>

      {
        Object.keys(errors?.errors)
      }
      
      {
        // Object.keys(errors).map(key => {
        //   const error = errors[key];

        //   error.map(e => <Text>{e}</Text>)
        // });
      }
     
      <Button title="login" onPress={handleLogin} />
    </View>
  );
}
