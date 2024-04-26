import { Badge, useTheme } from '@rneui/themed';
import { t } from 'i18next';
import React from 'react';
import { DeviceValidationStatus } from 'types/ApiTypes';
import { stylesBadgeStatus } from './_styles';

interface BadgeStatusProps {
    status: DeviceValidationStatus['validation_status'];
}

export default function BadgeStatus({ status }: BadgeStatusProps) {
    const styles = stylesBadgeStatus();

    const statusStyle = {
        pending: styles.pending,
        rejected: styles.rejected,
        validated: styles.validated
    };

    return <Badge
        value={t(`status.${status}` as any)}
        badgeStyle={statusStyle[status]}
    />
}