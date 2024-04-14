import { Button } from "@rneui/base";
import { useTheme } from "@rneui/themed";
import { t } from "i18next";
import { useFormContext } from "react-hook-form";

interface ButtonPreviousStepProps {
    fieldName: string;
    onPrevious: () => void;
}

export default function ButtonPreviousStep({ fieldName, onPrevious }: ButtonPreviousStepProps) {
    const { theme } = useTheme();
    const { setValue } = useFormContext();

    const handlePrevious = () => {
        setValue(fieldName, '');
        onPrevious();
    }

    return (
        <Button
            title={t("buttons.previousStep")}
            onPress={handlePrevious}
            color={theme.colors.primary}
            iconPosition='left'
            icon={{
                type: "material-community",
                name: "arrow-left-thin",
                color: "#fff",
            }}
        />
    );
}