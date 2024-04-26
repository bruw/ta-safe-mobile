import { Button } from "@rneui/themed";
import { t } from "i18next";
import { stylesButtonValidation } from "./_styles";

export default function ValidationButton() {
    const styles = stylesButtonValidation();

    return (
        <Button
            title={t("buttons.validation")}
            buttonStyle={styles.container}
        />
    );
}