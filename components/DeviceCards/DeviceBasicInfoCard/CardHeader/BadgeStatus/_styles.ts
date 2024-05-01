import { makeStyles } from "@rneui/themed";

export const stylesBadgeStatus = makeStyles((theme) => ({
    badgeStyle: {
        height: 30,
        padding: 6,
    },
    pending: {
        backgroundColor: theme.colors.warning,
    },
    inAnalysis: {
        backgroundColor: theme.colors.info,
    },
    rejected: {
        backgroundColor: theme.colors.error,
    },
    validated: {
        backgroundColor: theme.colors.success,
    }
}));