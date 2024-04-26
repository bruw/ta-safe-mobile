import { makeStyles } from "@rneui/themed";

export const stylesCustomActivityIndicator = makeStyles((theme) => ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: theme.colors.primary,
    }
}));