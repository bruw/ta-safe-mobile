import { Text } from "@rneui/base";
import { makeStyles } from "@rneui/themed";

interface StepTitleProps {
    span: string;
    content: string;
}

export default function StepTitle({ span, content }: StepTitleProps) {
    const styles = useStyles();

    return (
        <Text style={styles.stepTitle} >
            <Text style={styles.span}>{span}:{' '}</Text>
            <Text>{content}</Text>
        </Text>
    );
}

const useStyles = makeStyles((theme) => ({
    stepTitle: {
        fontSize: 18,
        textAlign: "center",
        width: "90%",
        marginBottom: 40,
    },
    span: {
        color: theme.colors.primary,
        fontWeight: '900',
    },
}));
