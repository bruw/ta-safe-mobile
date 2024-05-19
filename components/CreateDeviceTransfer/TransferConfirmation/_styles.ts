import { makeStyles } from "@rneui/themed";

export const stylesTransferConfirmation = makeStyles((theme) => ({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    userInfoContainer: {
        borderWidth: 1,
        borderColor: theme.colors.greyOutline,
        padding: theme.spacing.lg,
        marginBottom: 22
    },
    userInfoContainerTitle: {
        fontSize: 16,
        fontWeight: '900',
    },
    deviceInfoContainer: {
        borderWidth: 1,
        borderColor: theme.colors.greyOutline,
        padding: theme.spacing.lg
    },
    deviceInfoContainerTitle: {
        fontSize: 16,
        fontWeight: '900',
    }
}));