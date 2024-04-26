import { Text, TextProps } from "@rneui/base";
import { stylesStepTitle } from "./_styles";

interface StepTitleProps extends TextProps {
    span: string;
    content: string;
}

export default function StepTitle({ span, content, ...textProps }: StepTitleProps) {
    const styles = stylesStepTitle();

    return (
        <Text {...textProps}>
            <Text style={styles.span}>{span}:{' '}</Text>
            <Text>{content}</Text>
        </Text>
    );
}
