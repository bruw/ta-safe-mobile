import { ThemeProvider, createTheme } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import "../services/lang/translation/i18n";

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
  },
});

export default function _Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack />
    </ThemeProvider>
  );
}
