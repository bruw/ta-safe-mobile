import { Text } from "@rneui/themed";
import { View } from "react-native";
import { stylesDeviceSummaryHeader } from "./_styles";
import { Transfer } from "types/ApiTypes";
import BadgeStatus from "components/UI/BadgeStatus";
import TransferType from "./TransferType";

interface TransferSummaryHeaderProps {
    transfer: Transfer;
}

export default function TransferSummaryHeader({ transfer }: TransferSummaryHeaderProps) {
    const styles = stylesDeviceSummaryHeader();

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.textTitle}>
                    <TransferType transfer={transfer} />
                </Text>
            </View>
            <View style={styles.status}>
                <BadgeStatus status={transfer.status} />
            </View>
        </View>
    );
}