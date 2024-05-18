import { makeStyles } from "@rneui/themed";

export const stylesCreateDeviceTransfer = makeStyles((theme) => ({
    overlay: {
        width: "90%",
        justifyContent: "center",
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    text: {
        textAlign: "center",
        marginBottom: 20,
    },
}));