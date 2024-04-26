import { Text, TextProps } from "@rneui/themed";
import { stylesTextWithSpan } from "./_styles";

interface TextWithSpan {
    text: string;
    textColor?: TextProps['selectionColor'];
    span?: string;
    spanColor?: TextProps['selectionColor'];
}

export default function TextWithSpan({ text, textColor, span, spanColor }: TextWithSpan) {
    const styles = stylesTextWithSpan();

    return (
        <Text style={styles.textContainer}>
            <Text style={[styles.span, { color: spanColor }]}>
                {span}{': '}
            </Text>
            <Text style={{ color: textColor }}>{text}</Text>
        </Text>
    );
}