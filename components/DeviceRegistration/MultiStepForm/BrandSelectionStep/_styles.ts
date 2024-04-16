import { makeStyles } from "@rneui/themed";

export const stylesBrandSelection = makeStyles(() => ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    stepTitle: {
        width: "90%",
        fontSize: 18,
        textAlign: "center",
        marginTop: 40,
        marginBottom: 40,
    },
    selectBrand: {
        width: "90%",
        borderBottomWidth: 1,
        borderColor: "#86939E",
        marginBottom: 40,
    },
}));