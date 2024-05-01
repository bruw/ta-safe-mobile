import WebView, { WebViewMessageEvent, WebViewNavigation } from "react-native-webview";
import NfePageHandler from "services/nfe/nfePageHandler";
import { Device } from "types/ApiTypes";

interface WebViewNfeProps {
    device: Device;
    onMessage: (event: WebViewMessageEvent) => void;
    onNavigationStateChange: (navState: WebViewNavigation) => void;
}

export default function WebViewNfe({ device, onMessage, onNavigationStateChange }: WebViewNfeProps) {
    const nfePageHandler = new NfePageHandler(device);

    const shouldStartLoadWithRequest = (navState: WebViewNavigation) => {
        const url = navState.url

        switch (url) {
            case nfePageHandler.homePageUrl():
                return true;
            case nfePageHandler.generalDataNfeUrl():
                return true;
            default:
                return false;
        }
    }

    return (
        <WebView
            source={{ uri: nfePageHandler.homePageUrl() }}
            javaScriptEnabled={true}
            startInLoadingState={true}
            injectedJavaScript={nfePageHandler.scripts()}
            onMessage={onMessage}
            onNavigationStateChange={onNavigationStateChange}
            onShouldStartLoadWithRequest={shouldStartLoadWithRequest}
        />
    );
}