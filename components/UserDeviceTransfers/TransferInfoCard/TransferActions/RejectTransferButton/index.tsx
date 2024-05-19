import { Button } from "@rneui/themed";
import { TransferContext } from "contexts/TransferProvider";
import notify from "helpers/notify";
import { t } from "i18next";
import { useContext } from "react";
import api from "services/api/api";
import { UpdatedTransfer } from "types/ApiTypes";
import { stylesRejectTransferButton } from "./_styles";

export default function RejectTransferButton() {
    const styles = stylesRejectTransferButton();
    const { transfer, updateTransfer } = useContext(TransferContext);

    const onSubmit = async () => {
        try {
            const response = await api.put<UpdatedTransfer>(`/api/device-transfers/${transfer.id}/reject`);

            updateTransfer(response.data.transfer);

            notify({
                type: response.data.message.type,
                message: response.data.message.text,
                autoHide: false
            });
        } catch (error: any) {
            const message = error.response.data.message;

            notify({
                type: message.type,
                message: message.text,
                autoHide: false
            });
        }
    };

    return (
        <Button
            title={t("buttons.reject")}
            onPress={onSubmit}
            buttonStyle={styles.buttonStyle}
        />
    );
}