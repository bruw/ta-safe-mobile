import { Icon } from "@rneui/base";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { Stack } from "expo-router";
import { useNavigation } from "expo-router/src/useNavigation";
import { StatusBar } from "expo-status-bar";
import React from "react";

const theme = createTheme({
  lightColors: {
    primary: "#6100DD",
  },
  components: {
    Input: {
      cursorColor: "#6100DD",
    },
    Button: {
      containerStyle: {
        borderRadius: 6,
      },
    },
    Text: {
      style: {
        fontSize: 16,
      },
    },
  },
});

export default function _Layout() {
  const navigation = useNavigation();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor={theme.lightColors?.primary} />
      <Stack
        screenOptions={{
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: theme.lightColors?.primary,
          },
          headerLeft: () => (
            <Icon
              name="arrow-left"
              type="material-community"
              color="white"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </ThemeProvider>
  );
}