import React from "react";
import { Stack } from "expo-router";
import FlashMessage from "react-native-flash-message";

export default function _Layout() {
  return (
    <>
      <Stack />
      <FlashMessage position="top" statusBarHeight={30} />
    </>
  );
}
