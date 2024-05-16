import { Avatar } from "@rneui/themed";
import { stylesAvatarIcon } from "./_styles";

export default function AvatarIcon() {
    const styles = stylesAvatarIcon();

    return (
        <Avatar
            rounded
            icon={{
                name: "account",
                type: "material-community",
                size: 26,
            }}
            containerStyle={styles.container}
        />
    );
}