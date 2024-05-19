import { Icon } from "@rneui/base";
import { ThemeProvider, createTheme } from "@rneui/themed";
import CustomDrawerContent from "components/UI/CustomDrawerContent";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { t } from "i18next";
import React from "react";
import FlashMessage from "react-native-flash-message";

const theme = createTheme({
  lightColors: {
    primary: "#6100DD",
    info: "#15A8CE",
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
        lineHeight: 26,
      },
    },
  },
});

export default function _Layout() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor={theme.lightColors?.primary} />

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
          name="search-device/index"
          options={{
            drawerLabel: t("components.searchDevice.title"),
            title: t("components.searchDevice.title"),
            drawerIcon: (item) => (
              <Icon
                name="file-search-outline"
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
          name="device-transfers/index"
          options={{
            drawerLabel: t("components.userDeviceTransfers.title"),
            title: t("components.userDeviceTransfers.title"),
            drawerIcon: (item) => (
              <Icon
                name="transfer"
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
            drawerLabel: t("labels.profile"),
            title: t("labels.profile"),
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
