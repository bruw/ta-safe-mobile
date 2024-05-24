import { Dialog, Icon, Text } from "@rneui/themed";
import { useState } from "react";
import { View } from "react-native";
import { stylesExpandableLabel } from "./_styles";

interface LabelWithInfoProps {
    label?: string;
    title: string;
    text: string;
    iconName?: string;
    iconSize?: number;
}

export default function ExpandableLabel({ label, title, text, iconName, iconSize }: LabelWithInfoProps) {
    const styles = stylesExpandableLabel();
    const [visible, setVisible] = useState<boolean>(false);

    const toggleDialog = () => { 
        setVisible(!visible); 
    };

    return (
        <>
            <Dialog
                isVisible={visible}
                onBackdropPress={toggleDialog}
                overlayStyle={styles.dialogOverlay}
            >
                <Dialog.Title title={title} />
                <Text>{text}</Text>
            </Dialog>
            <View style={styles.labelContainer}>
                {label && <Text style={styles.label}>{label}</Text>}

                <Icon type="material-community"
                    name={iconName || "information"}
                    size={iconSize || 20}
                    iconStyle={styles.icon}
                    onPress={toggleDialog}
                />
            </View>
        </>
    )
}