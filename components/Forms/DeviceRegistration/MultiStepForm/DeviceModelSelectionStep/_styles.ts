import { makeStyles } from "@rneui/themed";

export const stylesDeviceModelSelection = makeStyles(() => ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    selectBrand: {
        width: "90%",
        borderBottomWidth: 1,
        borderColor: "#86939E",
        marginBottom: 40,
    },
    stepTitle: {
        width: "90%",
        fontSize: 18,
        textAlign: "center",
        marginTop: 40,
        marginBottom: 40,
    },
    stepButtons: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
    }
}));