import { Button, Dialog, Icon, Text } from "@rneui/themed";
import CopyToClipboardButton from "components/UI/CopyToClipboardButton";
import { DeviceContext } from "contexts/DeviceProvider";
import { isTokenExpired } from "helpers/isTokenExpired";
import notify from "helpers/notify";
import { t } from "i18next";
import { useContext, useState } from "react";
import { View } from "react-native";
import api from "services/api/api";
import { DeviceSharedToken } from "types/ApiTypes";
import { stylesDeviceShareToken } from "./_styles";
import moment from "moment";

export default function DeviceShareToken() {
    const styles = stylesDeviceShareToken();
    const { device, updateDevice } = useContext(DeviceContext);

    const [visible, setVisible] = useState(false);
    const [token, setToken] = useState<string>('');

    const onSubmit = async () => {
        try {
            const response = await api.post<DeviceSharedToken>(`/api/devices/${device.id}/share`);

            updateDevice({
                ...device,
                sharing_token: {
                    id: response.data.id,
                    token: response.data.token,
                    expires_at: response.data.expires_at
                }
            });

            setToken(response.data.token);
            setVisible(true);
        } catch (error: any) {
            const data = error.response.data;
            setVisible(false);

            notify({
                type: data.message.type,
                message: data.message.text,
            });
        }
    };

    const handleSharePress = () => {
        if (isTokenExpired(device.sharing_token?.expires_at)) {
            onSubmit();
        } else {
            setToken(device.sharing_token?.token || '');
            setVisible(true);
        }
    };

    return (
        <View>
            <Dialog
                isVisible={visible}
                onBackdropPress={() => setVisible(false)}
                overlayStyle={styles.overlay}
                backdropStyle={styles.backdrop}
            >
                <Dialog.Title title={t("components.deviceShare.title")} titleStyle={styles.text} />
                <CopyToClipboardButton text={token} />
                <Text style={[styles.text, styles.expiration]}>
                    {t("components.deviceShare.expires")}{moment(device.sharing_token?.expires_at).format('DD/MM/Y [às] HH:mm:ss')}
                </Text>
                <Text style={styles.text}>{t("components.deviceShare.instruction")}</Text>
            </Dialog>
            <Button type="clear" onPress={handleSharePress}>
                <Icon name="share" type="feather" size={22} />
            </Button>
        </View>
    );
}