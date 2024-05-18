import { makeStyles } from "@rneui/themed";

export const stylesDeviceSummaryHeader = makeStyles(() => ({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        width: "40%",
        alignItems: "flex-start",
    },
    textTitle: {
        fontWeight: "900",
    },
    status: {
        width: "40%",
        alignItems: "flex-end"
    }
}));