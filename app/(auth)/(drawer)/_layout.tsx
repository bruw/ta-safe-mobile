import { Icon } from "@rneui/base";
import { ThemeProvider, createTheme } from "@rneui/themed";
import CustomDrawerContent from "components/CustomDrawerContent";
import { Drawer } from "expo-router/drawer";
import { t } from "i18next";
import React from "react";
import FlashMessage from "react-native-flash-message";

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
      <FlashMessage position="top" statusBarHeight={40} />

      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerActiveTintColor: theme.lightColors?.primary,
          drawerInactiveTintColor: theme.lightColors?.grey2,
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: theme.lightColors?.primary,
          },
        }}
      >
        <Drawer.Screen
          name="my-devices/index"
          options={{
            drawerLabel: t("components.myDevices.title"),
            title: t("components.myDevices.title"),
            drawerIcon: (item) => (
              <Icon
                name="cellphone"
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

        <Drawer.Screen
          name="device-registration/index"
          options={{
            drawerLabel: t("components.deviceRegistration.title"),
            title: t("components.deviceRegistration.title"),
            drawerIcon: (item) => (
              <Icon
                name="newspaper-variant-multiple-outline"
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

        <Drawer.Screen
          name="profile/index"
          options={{
            drawerLabel: t("components.profile.title"),
            title: t("components.profile.title"),
            drawerIcon: (item) => (
              <Icon
                name="account"
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
