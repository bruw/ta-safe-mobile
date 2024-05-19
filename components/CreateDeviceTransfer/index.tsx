import { Dialog } from "@rneui/themed";
import MainButton from "components/UI/MainButton";
import { useContext, useState } from "react";
import { View } from "react-native";
import { stylesCreateDeviceTransfer } from "./_styles";
import { t } from "i18next";
import { User } from "types/ApiTypes";
import { DeviceContext } from "contexts/DeviceProvider";
import TransferConfirmation from "./TransferConfirmation";
import SearchUser from "./SearchUser";

export default function CreateDeviceTransfer() {
    const styles = stylesCreateDeviceTransfer();
    const { device } = useContext(DeviceContext);
    const [visible, setVisible] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    const handleBackdropPress = () => {
        setUser(null);
        setVisible(false);
    }

    return (
        <View>
            <Dialog
                isVisible={visible}
                onBackdropPress={handleBackdropPress}
                overlayStyle={styles.overlay}
                backdropStyle={styles.backdrop}
            >
                {!user && (
                    <SearchUser setUser={setUser} />)
                }

                {user && (
                    <TransferConfirmation
                        user={user}
                        device={device}
                        setVisible={setVisible}
                        setUser={setUser}
                    />
                )}
            </Dialog>

            <MainButton
                title={t("buttons.create_transfer")}
                onPress={() => setVisible(true)}
            />
        </View>
    );
}