import { Badge } from '@rneui/themed';
import { t } from 'i18next';
import React, { useContext } from 'react';
import { stylesBadgeStatus } from './_styles';
import { DeviceContext } from 'contexts/DeviceProvider';

export default function BadgeStatus() {
    const styles = stylesBadgeStatus();
    const device = useContext(DeviceContext);

    const statusStyle = {
        pending: styles.pending,
        rejected: styles.rejected,
        validated: styles.validated
    };

    return <Badge
        value={t(`status.${device.validation_status}`)}
        badgeStyle={statusStyle[device.validation_status]}
    />
}