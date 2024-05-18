import { ListItem } from "@rneui/themed";
import { Transfer } from "types/ApiTypes";
import ParticipantInfo from "./ParticipantInfo";
import TransferHeader from "./TransferHeader";
import CustomDivider from "components/UI/CustomDivider";
import { t } from "i18next";

interface TransferInfoProps {
    transfer: Transfer;
    expanded: boolean;
    setExpanded: (id?: number) => void;
}

export default function TransferInfo({ transfer, expanded, setExpanded }: TransferInfoProps) {
    const handlePress = () => {
        setExpanded(expanded ? undefined : transfer.id);
    };

    return (
        <ListItem.Accordion
            content={<TransferHeader date={transfer.updated_at} />}
            isExpanded={expanded}
            onPress={handlePress}
        >
            <ParticipantInfo
                title={t("components.transferInfo.targetUser")}
                name={transfer.target_user.name}
                cpf={transfer.target_user.cpf}
            />

            <ParticipantInfo
                title={t("components.transferInfo.sourceUser")}
                name={transfer.source_user.name}
                cpf={transfer.source_user.cpf}
            />

            <CustomDivider />
        </ListItem.Accordion>
    );
}