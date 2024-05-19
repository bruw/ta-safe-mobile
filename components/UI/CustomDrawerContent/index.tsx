import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import useToken from "states/useToken";
import { Icon } from "@rneui/base";
import { t } from "i18next";

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
    const router = useRouter();

    const handleLogout = async () => {
        useToken.getState().clearToken();
        router.replace("/(public)/login");
    };

    return (
        <DrawerContentScrollView {...props} >
            <DrawerItemList {...props} />
            <DrawerItem
                label={t("labels.logout")}
                onPress={handleLogout}
                labelStyle={{ color: "red" }}
                pressColor="#FFB5B5"
                icon={() => <Icon name="logout" type="material-community" color="red" />}
            />
        </DrawerContentScrollView>
    );
}