import { makeStyles } from "@rneui/themed";

export const stylesDeviceInfo = makeStyles((theme) => ({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    info: {
        width: "90%",
        marginBottom: theme.spacing.xl,
    },
    StepTitle: {
        width: "90%",
        fontSize: 18,
        textAlign: "center",
        marginTop: 40,
        marginBottom: 40,
    },
    buttons: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 40,
    },
    cancelButton: {
        paddingHorizontal: 25,
        backgroundColor: "red",
    },
    registerButton: {
        paddingHorizontal: 25,
        backgroundColor: theme.colors.primary,
    },
    defaultSpacing: {
        marginBottom: theme.spacing.lg,
    },
}));