import { makeStyles } from "@rneui/themed";

export const stylesDeviceRegistrationInfoHeader = makeStyles((theme) => ({
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: theme.spacing.lg,
    },
    titleContent: {
        fontSize: 16,
        fontWeight: "900",
        color: "#43484d"
    }
}));