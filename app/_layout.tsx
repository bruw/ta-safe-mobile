import { Stack } from "expo-router";
import React from "react";
import FlashMessage from "react-native-flash-message";
import "../services/lang/translation/i18n";
import { PaperProvider, DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6100DD",
    error: "#D90000",
  },
};

export default function _Layout() {
  return (
    <PaperProvider theme={theme}>
      <Stack />
      <FlashMessage position="top" statusBarHeight={30} />
    </PaperProvider>
  );
}
