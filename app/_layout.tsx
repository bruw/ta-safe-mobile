import { Stack } from "expo-router";
import React from "react";
import FlashMessage from "react-native-flash-message";

export default function _Layout() {
  return (
    <>
      <Stack />
      <FlashMessage position="top" statusBarHeight={30} />
    </>
  );
}
