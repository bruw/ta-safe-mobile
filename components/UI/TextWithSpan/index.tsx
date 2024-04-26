import { Text } from "@rneui/themed";
import { stylesTextWithSpan } from "./_styles";

interface TextWithSpan {
    text: string;
    span: string;
}

export default function TextWithSpan({ text, span }: TextWithSpan) {
    const styles = stylesTextWithSpan();

    return (
        <Text style={styles.textContainer}>
            <Text style={styles.span}>
                {span}{': '}
            </Text>
            {text}
        </Text>
    );
}