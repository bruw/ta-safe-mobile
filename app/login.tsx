import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";

import api from "../services/api";
import useToken from "../states/useToken";
import displayErrorsHelper from "../helpers/displayErrors";
import { UserAfterRegister } from "../types/ApiTypes";

import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Text, Button } from "react-native-paper";

export default function _Screen() {
  const router = useRouter();
  const { setToken } = useToken();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const response = await api.post<UserAfterRegister>("/api/login", {
        email: email,
        password: password,
      });

      setToken(response.data.token);

      router.push("/(auth)/home");
    } catch (error: any) {
      const dataErrors = error.response?.data.errors;
      displayErrorsHelper(dataErrors);
    }
  };

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <View style={styles.defaultSpacing}>
            <Text
              variant="headlineMedium"
              style={[styles.loginTitle, styles.text]}
            >
              Bem Vindo!
            </Text>
            <Text variant="titleMedium" style={styles.text}>
              Acesse sua conta para continuar.
            </Text>
          </View>

          <View>
            <TextInput
              label="Email"
              value={email}
              onChangeText={(email: string) => setEmail(email)}
              right={<TextInput.Icon icon="email" />}
              keyboardType="email-address"
              style={styles.defaultSpacing}
            />

            <TextInput
              label="Senha"
              value={password}
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
              onChangeText={(password: string) => setPassword(password)}
              style={styles.defaultSpacing}
            />

            <Button
              icon="login"
              mode="contained"
              onPress={handleLogin}
              style={styles.loginButton}
            >
              Entrar
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "rgba(25, 0, 70, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    width: "90%",
  },
  defaultSpacing: {
    marginBottom: 30,
  },
  loginTitle: {
    fontWeight: "900",
  },
  text: {
    color: "#fff",
  },
  loginButton: {
    borderRadius: 6,
    backgroundColor: "#D35400",
  },
});
