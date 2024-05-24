import { makeStyles } from "@rneui/themed";

export const stylesExpandableLabel = makeStyles((theme) => ({
    dialogOverlay: {
        width: "90%",
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        color: theme.colors.grey3,
        marginRight: theme.spacing.md,
    },
    icon: {
        color: theme.colors.grey3
    }
}));