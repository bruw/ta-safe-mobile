import { Badge } from '@rneui/themed';
import { t } from 'i18next';
import React from 'react';
import { stylesBadgeStatus } from './_styles';
import { DeviceTransferStatus, DeviceValidationStatus } from 'types/ApiTypes';

interface BadgeStatusProps {
    status: DeviceTransferStatus['status'] | DeviceValidationStatus['validation_status'];
}

export default function BadgeStatus({ status }: BadgeStatusProps) {
    const styles = stylesBadgeStatus();

    const statusStyle = {
        pending: styles.warning,
        in_analysis: styles.info,
        canceled: styles.info,
        rejected: styles.error,
        validated: styles.success,
        accepted: styles.success
    };

    return <Badge
        value={t(`status.${status}`)}
        textStyle={styles.badgeTextStyle}
        badgeStyle={[
            styles.badgeStyle,
            statusStyle[status]
        ]}
    />
}