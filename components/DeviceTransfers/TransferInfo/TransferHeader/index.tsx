import { ListItem } from "@rneui/themed"
import moment from "moment"

interface TransferHeaderProps {
    date: string;
}

export default function TransferHeader({ date }: TransferHeaderProps) {
    return (
        <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "bold" }}>
                {moment(date).format('DD/MM/YYYY HH:mm:ss')}
            </ListItem.Title>
        </ListItem.Content>
    )
}