import { makeStyles } from "@rneui/themed";

export const stylesTransferType = makeStyles((theme) => ({
    container: {
        flexDirection: "row", 
        alignItems: "center"
    },
    icon: {
        marginRight: theme.spacing.md
    },
}));