import moment from "moment";

export default function formatDateToBrLocale(date: string | undefined) {
    if (date)
        return moment(date).format('DD/MM/YYYY HH:mm:ss');
}