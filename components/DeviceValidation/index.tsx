import React, { useContext, useState } from "react";
import { Modal, View } from "react-native";
import { WebViewMessageEvent, WebViewNavigation } from "react-native-webview";
import MainButton from "components/UI/MainButton";
import { t } from "i18next";
import NfePageHandler from "services/nfe/nfePageHandler";
import CustomActivityIndicator from "components/UI/CustomActivityIndicator";
import WebViewNfe from "./WebViewNfe";
import { DeviceContext } from "contexts/DeviceProvider";

export default function DeviceValidation() {
    const device = useContext(DeviceContext);
    const nfePageHandler = new NfePageHandler(device);

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [showActivityIndicator, setShowActivityIndicator] = useState(false);

    const handleMessage = (event: WebViewMessageEvent) => {
        const { cpf, name, products } = JSON.parse(event.nativeEvent.data);
        console.log(cpf, name, products)
    };

    const handleWebViewNavigationStateChange = (navState: WebViewNavigation) => {
        if (navState.url == nfePageHandler.generalDataNfeUrl()) {
            setShowActivityIndicator(true);
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
                            t("components.customActivityIndicator.nfeValidation")
                        }
                    />
                }
            </Modal>
        </View>
    );
}
