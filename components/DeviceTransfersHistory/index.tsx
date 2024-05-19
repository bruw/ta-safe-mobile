import { Card } from "@rneui/base";
import { DeviceContext } from "contexts/DeviceProvider";
import { useContext, useState } from "react";
import { stylesDeviceTransfersHistory } from "./_styles";
import TransferInfo from "./TransferInfo";
import { t } from "i18next";
import { Text } from "@rneui/themed";

export default function DeviceTransfersHistory() {
    const styles = stylesDeviceTransfersHistory();
    const { device } = useContext(DeviceContext);
    const [expandedTransferId, setExpandedTranferId] = useState<number>();

    return (
        <Card containerStyle={styles.container}>
            <Card.Title style={styles.title}>
                {t("cards.deviceTranfersHistory.title")}
            </Card.Title>

            <Card.Divider />

            {device.transfers_history?.length == 0 && (
                <Text>{t("cards.deviceTranfersHistory.nonTransfers")}</Text>
            )}

            {device.transfers_history?.map(transfer => (
                <TransferInfo
                    key={transfer.id}
                    transfer={transfer}
                    expanded={expandedTransferId == transfer.id}
                    setExpanded={setExpandedTranferId}
                />
            ))}
        </Card>
    );
}