import { makeStyles } from "@rneui/themed";

export const stylesBadgeStatus = makeStyles((theme) => ({
    pending: {
        height: 30,
        padding: 6,
        backgroundColor: theme.colors.warning,
    },
    rejected: {
        height: 30,
        padding: 6,
        backgroundColor: theme.colors.error,
    },
    validated: {
        height: 30,
        padding: 6,
        backgroundColor: theme.colors.success,
    }
}));