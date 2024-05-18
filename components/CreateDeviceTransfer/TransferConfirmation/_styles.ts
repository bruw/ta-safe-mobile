import { makeStyles } from "@rneui/themed";

export const stylesTransferConfirmation = makeStyles(() => ({
    title: {
        textAlign: "center",
        marginBottom: 20,
    },
    userInfoContainer: {
        borderWidth: 1,
        borderColor: '#D7D7D7',
        padding: 10,
        marginBottom: 20,
    },
    userInfoContainerTitle: {
        fontSize: 16,
        fontWeight: '900',
        marginBottom: 8
    },
    deviceInfoContainer: {
        borderWidth: 1,
        borderColor: '#D7D7D7',
        padding: 10
    },
    deviceInfoContainerTitle: {
        fontSize: 16,
        fontWeight: '900',
        marginBottom: 8
    }
}));