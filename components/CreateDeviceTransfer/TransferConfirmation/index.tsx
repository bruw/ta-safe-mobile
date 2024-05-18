import { CheckBox, Dialog } from "@rneui/themed";
import MainButton from "components/UI/MainButton";
import { View } from "react-native";
import { Text } from "@rneui/themed";
import LabeledText from "components/UI/LabeledText";
import { Device, User } from "types/ApiTypes";
import { useState } from "react";
import { stylesTransferConfirmation } from "./_styles";
import { t } from "i18next";
import api from "services/api/api";
import notify from "helpers/notify";

interface TransferConfirmationProps {
    user: User;
    device: Device;
    setVisible: (visible: boolean) => void;
    setUser: (user: User | null) => void;
}

export default function TransferConfirmation({ user, device, setVisible, setUser }: TransferConfirmationProps) {
    const styles = stylesTransferConfirmation();
    const [checked, setChecked] = useState<boolean>(false);

    const toggleCheckbox = () => setChecked(!checked);

    const onSubmit = async () => {
        try {
            const response = await api.post(`api/devices/${device.id}`, {
                target_user_id: user.id
            });

            notify({
                type: response.data.message.type,
                message: response.data.message.text,
                autoHide: false
            });

        } catch (error: any) {
            const data = error.response.data;

            notify({
                type: data.message.type,
                message: data.message.text,
                autoHide: false
            });

        } finally {
            setVisible(false);
            setUser(null);
        }
    };

    return (
        <>
            <Dialog.Title
                title={t("components.createDeviceTransfer.title2")}
                titleStyle={styles.title}
            />

            <View style={styles.userInfoContainer}>
                <Text style={styles.userInfoContainerTitle}>
                    {t("components.createDeviceTransfer.userInfoTitle")}
                </Text>

                <LabeledText
                    label={t("attributes.user.name")}
                    text={user.name}
                />

                <LabeledText
                    label={t("attributes.user.cpf")}
                    text={user.cpf}
                />

                <LabeledText
                    label={t("attributes.user.phone")}
                    text={user.phone}
                />
            </View>

            <View style={styles.deviceInfoContainer}>
                <Text style={styles.deviceInfoContainerTitle}>
                    {t("components.createDeviceTransfer.deviceInfoTitle")}
                </Text>

                <LabeledText
                    label={t("attributes.device.brand")}
                    text={device.device_model.brand.name}
                />
                <LabeledText
                    label={t("attributes.device.model")}
                    text={device.device_model.name}
                />
            </View>

            <CheckBox
                checked={checked}
                onPress={toggleCheckbox}
                title={t("checkBoxs.confirmationOfInfo")}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
            />

            <MainButton
                title={t("buttons.transfer")}
                disabled={!checked}
                onPress={onSubmit}
            />
        </>
    );
}