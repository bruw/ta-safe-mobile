import { makeStyles } from "@rneui/themed";

export const stylesDeviceModelSelection = makeStyles((theme) => ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    selectBrand: {
        width: "90%",
        borderBottomWidth: 1,
        borderColor: "#86939E",
        marginBottom: theme.spacing.xl,
    },
    stepTitle: {
        width: "90%",
        fontSize: 18,
        textAlign: "center",
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl,
    },
    stepButtons: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
    }
}));