import { makeStyles } from "@rneui/themed";

export const stylesCreateDeviceTransfer = makeStyles(() => ({
    overlay: {
        width: "90%",
        justifyContent: "center",
        maxHeight: "95%"
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    text: {
        textAlign: "center",
        marginBottom: 20,
    },
}));