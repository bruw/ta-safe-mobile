import { makeStyles } from "@rneui/themed";
import { StyleSheet } from "react-native";

export const stylesCustomActivityIndicator = makeStyles((theme) => ({
    container: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    activityIndicator: {
        marginBottom: theme.spacing.lg,
    },
    text: {
        color: theme.colors.primary,
        textAlign: "center"
    }
}));