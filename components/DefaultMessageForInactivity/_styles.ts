import { makeStyles } from "@rneui/themed";

export const stylesDefaultMessageForInactivity = makeStyles((theme) => ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentMessage: {
        width: "90%",
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: theme.spacing.xl
    },
    link: {
        color: theme.colors.primary,
        fontWeight: '700',
        fontSize: 18
    }
}));