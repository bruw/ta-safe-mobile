import { Button, Icon, Text } from "@rneui/themed";
import { useState } from "react";
import { TextStyle } from "react-native";
import * as Clipboard from 'expo-clipboard';

interface CopyToClipboardButtonProps {
    label?: string;
    labeStyle?: TextStyle;
    text: string;
    textStyle?: TextStyle;
    iconSize?: number;
}

export default function CopyToClipboardButton({ label, labeStyle, text, textStyle, iconSize = 18 }: CopyToClipboardButtonProps) {
    const [copy, setCopy] = useState<boolean>(false);

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(text);
        setCopy(true);

        setTimeout(() => {
            setCopy(false);
        }, 2000);
    };

    return (
        <>
            {label && <Text style={labeStyle}>{label}{': '}</Text>}

            <Text style={textStyle}>{text}</Text>

            <Button type="clear" onPress={copyToClipboard} disabled={copy}>
                <Icon
                    name={copy ? "check" : "content-copy"}
                    type="material-community"
                    size={iconSize}
                    color={copy ? "green" : undefined}
                />
            </Button>
        </>
    );
}
