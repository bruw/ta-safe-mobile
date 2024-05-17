import { makeStyles } from "@rneui/themed";

export const stylesDeviceRegistrationInfo = makeStyles((theme) => ({
    pending: {
        color: theme.colors.warning,
        fontWeight: 'bold',
    },
    inAnalysis: {
        color: theme.colors.info,
        fontWeight: 'bold',
    },
    rejected: {
        color: theme.colors.error,
        fontWeight: 'bold',
    },
    validated: {
        color: theme.colors.success,
        fontWeight: 'bold',
    },
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: theme.spacing.lg,
    },
    titleContent: {
        fontSize: 16,
        fontWeight: "900",
        color: "#43484d"
    }
}));