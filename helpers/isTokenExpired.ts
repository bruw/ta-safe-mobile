import moment from "moment";

export const isTokenExpired = (expirationDate: Date | undefined): boolean => {
    if (expirationDate) {
        const now = moment.utc();

        console.log(moment.utc(expirationDate).isBefore(now));

        return moment.utc(expirationDate).isBefore(now);
    }

    return true;
};