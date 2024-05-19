import { makeStyles } from "@rneui/themed";

export const stylesDeviceShareToken = makeStyles((theme) => ({
    overlay: {
        width: "90%",
        justifyContent: 'center',
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    tokenContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
    expiration: {
        color: 'red',
        marginBottom: theme.spacing.md
    }
}));