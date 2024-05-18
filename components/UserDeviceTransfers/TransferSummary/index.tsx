import React from 'react';
import { Transfer } from 'types/ApiTypes';
import { Card } from '@rneui/base';
import CustomDivider from 'components/UI/CustomDivider';
import TransferSummaryHeader from './TransferSummaryHeader';
import TransferSummaryContent from './TransferSummaryContent';

interface TransferSummaryProps {
    transfer: Transfer;
}

export default function TransferSummary({ transfer }: TransferSummaryProps) {
    return (
        <Card>
            <TransferSummaryHeader transfer={transfer} />
            <CustomDivider />
            <TransferSummaryContent transfer={transfer} />
        </Card>
    );
}