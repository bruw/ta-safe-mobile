import { makeStyles } from "@rneui/themed";

export const stylesTextWithSpan = makeStyles((theme) => ({
    textContainer: {
        marginBottom: theme.spacing.sm,
    },
    span: {
        fontWeight: '900',
    },
}));