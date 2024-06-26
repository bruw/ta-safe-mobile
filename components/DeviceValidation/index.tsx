import React, { useContext, useState } from "react";
import { Modal, View } from "react-native";
import { WebViewMessageEvent, WebViewNavigation } from "react-native-webview";
import MainButton from "components/UI/MainButton";
import { t } from "i18next";
import NfePageHandler from "services/nfe/nfePageHandler";
import CustomActivityIndicator from "components/UI/CustomActivityIndicator";
import WebViewNfe from "./WebViewNfe";
import { DeviceContext } from "contexts/DeviceProvider";
import api from "services/api/api";
import notify from "helpers/notify";
import { useForm } from "react-hook-form";
import { Device, FlashMessage, InvalidatedDevice, UpdatedDevice } from "types/ApiTypes";

interface DeviceValidationForm {
    cpf: string;
    name: string;
    products: string;
}

export default function DeviceValidation() {
    const { device, updateDevice } = useContext(DeviceContext);
    const nfePageHandler = new NfePageHandler(device);

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [showActivityIndicator, setShowActivityIndicator] = useState(false);
    const [isValidInvoice, setIsValidInvoice] = useState(false);

    const {
        setValue,
        handleSubmit
    } = useForm<DeviceValidationForm>();

    const onSubmit = async (data: DeviceValidationForm) => {
        try {
            let response;

            if (isValidInvoice) {
                response = await api.post<UpdatedDevice>(`/api/devices/${device.id}/validate`, data);
            } else {
                response = await api.post<InvalidatedDevice>(`/api/devices/${device.id}/invalidate`);
            }

            const updatedDevice: Device = response.data.device;
            const message: FlashMessage = response.data.message;

            updateDevice(updatedDevice);

            notify({
                type: isValidInvoice ? message.type : 'error',
                message: message.text,
                autoHide: false
            });


        } catch (error: any) {
            const message: FlashMessage = error.response.data.message;

            notify({
                type: message.type,
                message: message.text,
                autoHide: false
            });

        } finally {
            setModalVisible(false);
            setShowActivityIndicator(false);
        }
    };

    const handleMessage = (event: WebViewMessageEvent) => {
        const { cpf, name, products } = JSON.parse(event.nativeEvent.data);
        setValue("cpf", cpf);
        setValue("name", name);
        setValue("products", products);

        handleSubmit(onSubmit)();
    };

    const handleWebViewNavigationStateChange = (navState: WebViewNavigation) => {
        if (navState.url == nfePageHandler.generalDataNfeUrl()) {
            setShowActivityIndicator(true);
            setIsValidInvoice(true);
        }

        if (navState.url == nfePageHandler.invalidNfeUrl()) {
            setShowActivityIndicator(true);
            setIsValidInvoice(false);

            handleSubmit(onSubmit)();
        }
    };

    return (
        <View>
            <MainButton
                title={t("buttons.validation")}
                onPress={() => setModalVisible(true)}
            />

            <Modal
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                    setShowActivityIndicator(false);
                }}
            >
                <WebViewNfe
                    device={device}
                    onMessage={handleMessage}
                    onNavigationStateChange={handleWebViewNavigationStateChange}
                />

                {showActivityIndicator &&
                    <CustomActivityIndicator
                        message={
                            t("components.custom_activity_indicator.nfe_validation")
                        }
                    />
                }
            </Modal>
        </View>
    );
}
