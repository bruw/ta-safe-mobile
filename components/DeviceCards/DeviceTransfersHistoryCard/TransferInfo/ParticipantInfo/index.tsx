import { ListItem } from "@rneui/themed";
import AvatarIcon from "components/UI/AvatarIcon";
import { t } from "i18next";
import { TextStyle } from "react-native";

interface ParticipantInfoProps {
    title: string;
    titleStyle?: TextStyle;
    name: string;
    cpf: string;
}

export default function ParticipantInfo({ title, titleStyle, name, cpf }: ParticipantInfoProps) {
    return (
        <ListItem>
            <AvatarIcon />
            <ListItem.Content>
                <ListItem.Title style={titleStyle}>{title}</ListItem.Title>
                <ListItem.Title>{name}</ListItem.Title>
                <ListItem.Title>{t("attributes.user.cpf")}{":"} {cpf}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    );
}