import { makeStyles } from "@rneui/themed";

export const stylesDeviceCardContent = makeStyles((theme) => ({
    textContainer: {
        marginBottom: theme.spacing.sm,
    },
    span: {
        fontWeight: '900',
    },
    button: {
        alignItems: "center",
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.md
    },
    buttonTitle: {
        color: theme.colors.primary,
        fontWeight: '700'
    }
}));