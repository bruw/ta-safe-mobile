import { Button } from "@rneui/base";
import { useTheme } from "@rneui/themed";
import { t } from "i18next";

interface ButtonNextStepProps {
    onNext: () => void;
    disabled: boolean;
}

export default function ButtonNextStep({ onNext, disabled }: ButtonNextStepProps) {
    const { theme } = useTheme();

    return (
        <Button
            title={t("buttons.next_step")}
            onPress={onNext}
            disabled={disabled}
            color={theme.colors.primary}
            iconPosition='right'
            icon={{
                type: "material-community",
                name: "arrow-right-thin",
                color: disabled ? theme.colors.grey3 : "#fff",
            }}
        />
    );
}