import { makeStyles } from "@rneui/themed";

export const stylesTextWithSpan = makeStyles((theme) => ({
    container: {
        marginBottom: theme.spacing.sm,
    },
    label: {
        fontWeight: 'bold',
    },
}));