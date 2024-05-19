import { Text } from "@rneui/themed";
import { View } from "react-native";
import { stylesTransferCardHeader } from "./_styles";
import { Transfer } from "types/ApiTypes";
import BadgeStatus from "components/UI/BadgeStatus";
import TransferType from "../TransferType";
import CustomDivider from "components/UI/CustomDivider";

interface TransferCardHeaderProps {
    transfer: Transfer;
}

export default function TransferCardHeader({ transfer }: TransferCardHeaderProps) {
    const styles = stylesTransferCardHeader();

    return (
        <>
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

            <CustomDivider />
        </>
    );
}