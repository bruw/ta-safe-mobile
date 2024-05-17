import { Button, Icon, Text } from "@rneui/themed";
import { useState } from "react";
import { View } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { stylesCopyToClipboardButton } from "./_styles";

interface CopyToClipboardButtonProps {
    text: string;
}

export default function CopyToClipboardButton({ text }: CopyToClipboardButtonProps) {
    const styles = stylesCopyToClipboardButton();
    const [copy, setCopy] = useState<boolean>(false);

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(text);
        setCopy(true);
    };

    return (
        <View style={styles.container}>
            <Text h4>{text}</Text>

            {!copy ? (
                <Button type="clear" onPress={copyToClipboard}>
                    <Icon name="content-copy" type="material-community" size={24} />
                </Button>
            ) : (
                <Button type="clear">
                    <Icon name="check" type="material-community" size={24} color="green" />
                </Button>
            )}
        </View>
    );
}