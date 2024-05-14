import { Text, TextProps } from "@rneui/themed";
import { stylesTextWithSpan } from "./_styles";
import { TextStyle } from "react-native";

interface LabeledTextProps {
    label: string;
    text: string;
    textStyle?: TextStyle;
}

export default function LabeledText({ label, text, textStyle }: LabeledTextProps) {
    const styles = stylesTextWithSpan();

    return (
        <Text style={styles.container}>
            <Text style={styles.label}>
                {label}{': '}
            </Text>
            <Text style={textStyle}>
                {text}
            </Text>
        </Text>
    );
}