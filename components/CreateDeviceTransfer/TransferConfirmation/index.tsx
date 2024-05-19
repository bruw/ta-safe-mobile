import { Icon } from "@rneui/themed";
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
import CheckBoxConfirmation from "components/UI/CheckBoxConfirmation";
import { ScrollView } from "react-native-gesture-handler";

interface TransferConfirmationProps {
    user: User;
    device: Device;
    setVisible: (visible: boolean) => void;
    setUser: (user: User | null) => void;
}

export default function TransferConfirmation({ user, device, setVisible, setUser }: TransferConfirmationProps) {
    const styles = stylesTransferConfirmation();
    const [checked, setChecked] = useState<boolean>(false);

    const handleClose = () => {
        setVisible(false);
        setUser(null);
    }

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

        } finally { handleClose() }
    };

    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {t("components.createDeviceTransfer.title2")}
                </Text>

                <Icon
                    name="close"
                    type="material-community"
                    size={24}
                    onPress={handleClose}
                />
            </View>

            <ScrollView>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.userInfoContainerTitle}>
                        {t("components.createDeviceTransfer.userInfoTitle")}
                    </Text>

                    <LabeledText
                        label={t("labels.name")}
                        text={user.name}
                    />

                    <LabeledText
                        label={t("labels.cpf")}
                        text={user.cpf}
                    />

                    <LabeledText
                        label={t("labels.phone")}
                        text={user.phone}
                    />
                </View>

                <View style={styles.deviceInfoContainer}>
                    <Text style={styles.deviceInfoContainerTitle}>
                        {t("labels.device")}
                    </Text>

                    <LabeledText
                        label={t("labels.identifier")}
                        text={device.id.toString()}
                    />

                    <LabeledText
                        label={t("labels.brand")}
                        text={device.device_model.brand.name}
                    />

                    <LabeledText
                        label={t("labels.model")}
                        text={device.device_model.name}
                    />
                </View>


                <CheckBoxConfirmation
                    label={t("checkBoxs.confirmationOfInfo")}
                    checked={checked}
                    onPress={setChecked}
                />

                <MainButton
                    title={t("buttons.transfer")}
                    disabled={!checked}
                    onPress={onSubmit}
                />
            </ScrollView>
        </>
    );
}