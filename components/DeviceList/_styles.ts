import { makeStyles } from "@rneui/themed";

export const stylesDeviceList = makeStyles((theme) => ({
    container: {
        flex: 1,
        alignItems: "center",
    },
    flatListContainer: {
        width: "90%",
        margin: theme.spacing.xl
    },
}));