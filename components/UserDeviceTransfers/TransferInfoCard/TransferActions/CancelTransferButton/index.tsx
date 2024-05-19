import { Button } from "@rneui/themed";
import { TransferContext } from "contexts/TransferProvider";
import notify from "helpers/notify";
import { t } from "i18next";
import { useContext } from "react";
import api from "services/api/api";
import { UpdatedTransfer } from "types/ApiTypes";
import { stylesCancelTransferButton } from "./_styles";

export default function CancelTransferButton() {
    const styles = stylesCancelTransferButton();
    const { transfer, updateTransfer } = useContext(TransferContext);

    const onSubmit = async () => {
        try {
            const response = await api.put<UpdatedTransfer>(`/api/device-transfers/${transfer.id}/cancel`);

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
            title={t("buttons.cancel")}
            onPress={onSubmit}
            buttonStyle={styles.buttonStyle}
        />
    );
}