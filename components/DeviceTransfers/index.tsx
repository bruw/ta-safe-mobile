import { Card } from "@rneui/base";
import { DeviceContext } from "contexts/DeviceProvider";
import { useContext, useState } from "react";
import { stylesDeviceTransfers } from "./_styles";
import TransferInfo from "./TransferInfo";
import { t } from "i18next";
import { Text } from "@rneui/themed";

export default function DeviceTransfers() {
    const styles = stylesDeviceTransfers();
    const { device } = useContext(DeviceContext);
    const [expandedTransferId, setExpandedTranferId] = useState<number>();

    return (
        <Card containerStyle={styles.container}>
            <Card.Title style={styles.title}>
                {t("cards.device_transfers.title")}
            </Card.Title>

            <Card.Divider />

            {device.transfers?.length == 0 && (
                <Text>{t("cards.device_transfers.non_transfers")}</Text>
            )}

            {device.transfers?.map(transfer => (
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