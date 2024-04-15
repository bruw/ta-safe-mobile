import { makeStyles } from "@rneui/themed";

export const stylesStepTitle = makeStyles((theme) => ({
    title: {
        fontSize: 18,
        textAlign: "center",
        width: "90%",
        marginBottom: 40,
    },
    span: {
        color: theme.colors.primary,
        fontWeight: '900',
    },
}));