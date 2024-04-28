import React, { useState } from "react";
import { Modal, View } from "react-native";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import MainButton from "components/UI/MainButton";
import { t } from "i18next";
import NfePageHandler from "services/nfe/nfePageHandler";


export default function DeviceValidation() {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const nfePageHandler = new NfePageHandler();

    const handleMessage = (event: WebViewMessageEvent) => {
        const { consumer, products} = JSON.parse(event.nativeEvent.data);
        console.log(consumer, products)
    };

    return (
        <View>
            <MainButton
                title={t("buttons.validation")}
                onPress={() => setModalVisible(true)}
            />
            <Modal
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
                transparent
            >
                <WebView
                    source={{ uri: nfePageHandler.homeUrl() }}
                    injectedJavaScript={nfePageHandler.scripts()}
                    javaScriptEnabled={true}
                    startInLoadingState={true}
                    onMessage={handleMessage}
                />
            </Modal>
        </View>
    );
}
