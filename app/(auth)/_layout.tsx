import { Icon } from "@rneui/base";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { Drawer } from "expo-router/drawer";
import { t } from "i18next";
import React from "react";
import { StatusBar } from "react-native";

import CustomDrawerContent from "../../components/CustomDrawerContent";
import "../../services/lang/translation/i18n";

const theme = createTheme({
  lightColors: {
    primary: "#6100DD",
  },
});

export default function _Layout() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.lightColors?.primary}
        barStyle="light-content"
      />
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerActiveTintColor: theme.lightColors?.primary,
          drawerInactiveTintColor: theme.lightColors?.grey2,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: theme.lightColors?.primary,
          },
        }}
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: t("components.home.title"),
            title: t("components.home.title"),
            drawerIcon: (item) => (
              <Icon
                name="view-dashboard-outline"
                type="material-community"
                color={
                  item.focused
                    ? theme.lightColors?.primary
                    : theme.lightColors?.grey2
                }
              />
            ),
          }}
        />
      </Drawer>
    </ThemeProvider>
  );
}
