import { makeStyles } from "@rneui/themed";

export const stylesDeviceCardContent = makeStyles((theme) => ({
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