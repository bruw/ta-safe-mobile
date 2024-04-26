import { Divider, DividerProps } from "@rneui/base";
import { stylesCustomDivider } from "./_styles";

export default function CustomDivider({ ...dividerProps }: DividerProps) {
    const styles = stylesCustomDivider();

    return (
        <Divider
            {...dividerProps}
            style={styles.container}
        />
    );
}