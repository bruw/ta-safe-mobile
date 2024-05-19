import { Text } from "@rneui/themed";
import { View } from "react-native";
import { stylesTransferCardHeader } from "./_styles";
import BadgeStatus from "components/UI/BadgeStatus";
import TransferType from "../TransferType";
import CustomDivider from "components/UI/CustomDivider";
import { useContext } from "react";
import { TransferContext } from "contexts/TransferProvider";

export default function TransferCardHeader() {
    const styles = stylesTransferCardHeader();
    const { transfer } = useContext(TransferContext);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>
                        <TransferType />
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