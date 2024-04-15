import { Text } from "@rneui/base";
import { stylesStepTitle } from "./_styles";

interface StepTitleProps {
    span: string;
    content: string;
}

export default function StepTitle({ span, content }: StepTitleProps) {
    const styles = stylesStepTitle();

    return (
        <Text style={styles.title} >
            <Text style={styles.span}>{span}:{' '}</Text>
            <Text>{content}</Text>
        </Text>
    );
}
