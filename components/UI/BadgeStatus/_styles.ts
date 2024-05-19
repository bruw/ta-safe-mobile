import { makeStyles } from "@rneui/themed";

export const stylesBadgeStatus = makeStyles((theme) => ({
    badgeStyle: {
        height: 30,
        padding: 6,
    },
    badgeTextStyle: {
        fontSize: 13,
    },
    warning: {
        backgroundColor: theme.colors.warning,
    },
    info: {
        backgroundColor: theme.colors.info,
    },
    error: {
        backgroundColor: theme.colors.error,
    },
    success: {
        backgroundColor: theme.colors.success,
    }
}));