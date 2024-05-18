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
    }
}));