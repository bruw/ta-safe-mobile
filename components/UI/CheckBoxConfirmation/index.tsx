import { CheckBox } from "@rneui/themed";
import { stylesCheckBoxConfirmation } from "./_styles";

interface CheckBoxConfirmationProps {
    label: string;
    checked: boolean;
    onPress: (checked: boolean) => void;
}

export default function CheckBoxConfirmation({ checked, label, onPress }: CheckBoxConfirmationProps) {
    const styles = stylesCheckBoxConfirmation();
    const toggleCheckbox = () => onPress(!checked);

    return (
        <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            title={label}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            containerStyle={styles.containerStyle}
        />
    );
}