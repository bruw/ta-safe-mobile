import { Button } from "@rneui/base";
import { useTheme } from "@rneui/themed";
import { t } from "i18next";

interface ButtonNextStepProps {
    onNext: () => void;
    disabledNextStep: boolean;
}

export default function ButtonNextStep({ onNext, disabledNextStep }: ButtonNextStepProps) {
    const { theme } = useTheme();

    return (
        <Button
            title={t("buttons.nextStep")}
            onPress={onNext}
            disabled={disabledNextStep}
            color={theme.colors.primary}
            iconPosition='right'
            icon={{
                type: "material-community",
                name: "arrow-right-thin",
                color: disabledNextStep ? theme.colors.grey3 : "#fff",
            }}
        />
    );
}