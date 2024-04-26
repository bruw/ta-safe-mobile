import { Button, ButtonProps } from "@rneui/themed";
import { stylesMainButton } from "./_styles";

export default function MainButton({ ...buttonProps }: ButtonProps) {
    const styles = stylesMainButton();

    return (
        <Button
            {...buttonProps}
            buttonStyle={styles.container}
        />
    );
}