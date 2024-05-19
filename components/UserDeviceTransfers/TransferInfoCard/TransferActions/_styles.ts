import { makeStyles } from "@rneui/themed";

export const stylesTransferActions = makeStyles((theme) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.spacing.lg,
    },
    button: {
        width: "45%",
    }
}));