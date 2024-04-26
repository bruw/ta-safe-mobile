import { makeStyles } from "@rneui/themed";

export const stylesDeviceCard = makeStyles((theme) => ({
    container: {
        padding: 10,
        borderWidth: 1,
        borderColor: theme.colors.grey4,
        borderRadius: 6,
        marginBottom: theme.spacing.xl,
    },
    divider: {
        margin: theme.spacing.lg,
    }
}));