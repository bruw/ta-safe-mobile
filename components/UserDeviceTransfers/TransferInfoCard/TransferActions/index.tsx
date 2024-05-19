import { TransferContext } from "contexts/TransferProvider";
import { useContext, useState } from "react";
import { View } from "react-native";
import useToken from "states/useToken";
import CancelTransferButton from "./CancelTransferButton";
import AcceptTransferButton from "./AcceptTransferButton";
import RejectTransferButton from "./RejectTransferButton";
import { stylesTransferActions } from "./_styles";
import { CheckBox } from "@rneui/themed";
import { t } from "i18next";
import CheckBoxConfirmation from "components/UI/CheckBoxConfirmation";

export default function TransferActions() {
    const styles = stylesTransferActions();
    const { transfer } = useContext(TransferContext);
    const { user } = useToken();
    const [checked, setChecked] = useState<boolean>(false);

    if (user?.id == transfer.source_user.id) {
        if (transfer.status == 'pending') {
            return <CancelTransferButton />
        }
    }

    if (transfer.status == 'pending') {
        return (
            <View>
                <CheckBoxConfirmation
                    label={t("checkBoxs.confirmationOfInfo")}
                    checked={checked}
                    onPress={setChecked}
                />

                <View style={styles.container}>
                    <View style={styles.button}>
                        <RejectTransferButton />
                    </View>

                    <View style={styles.button}>
                        <AcceptTransferButton disabled={!checked} />
                    </View>
                </View>
            </View>
        );
    }
}