import { makeStyles } from "@rneui/themed";

export const stylesDeviceShare = makeStyles((theme) => ({
    overlay: {
        width: "90%",
        justifyContent: "center",
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    text: {
        textAlign: "center",
    },
    expiration: {
        color: "red",
        marginBottom: theme.spacing.md
    }
}));