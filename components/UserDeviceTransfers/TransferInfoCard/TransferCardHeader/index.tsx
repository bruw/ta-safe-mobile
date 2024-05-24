import { Text } from "@rneui/themed";
import { stylesTransferCardHeader } from "./_styles";
import TransferType from "../TransferType";
import CustomDivider from "components/UI/CustomDivider";

export default function TransferCardHeader() {
    const styles = stylesTransferCardHeader();

    return (
        <>
            <Text style={styles.title}>
                <TransferType />
            </Text>

            <CustomDivider />
        </>
    );
}