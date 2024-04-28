import { Redirect } from "expo-router";
import React from "react";
import useToken from "states/useToken";

export default function _Screen() {
  const { token } = useToken();

  if (token) {
    return <Redirect href="/(auth)/(drawer)/my-devices" />;
  }

  return <Redirect href="/(public)/login" />;
}
