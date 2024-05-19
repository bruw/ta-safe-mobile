import { Dialog, Input, useTheme } from "@rneui/themed";
import MainButton from "components/UI/MainButton";
import { Controller, useForm } from "react-hook-form";
import api from "services/api/api";
import { SearchUserByEmail, User } from "types/ApiTypes";
import { stylesSearchUserTransfer } from "./_styles";
import { t } from "i18next";

interface SearchUserProps {
    setUser: (user: User) => void;
}

export default function SearchUser({ setUser }: SearchUserProps) {
    const styles = stylesSearchUserTransfer();
    const { theme } = useTheme();

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<SearchUserByEmail>();

    const onSubmit = async ({ email }: SearchUserByEmail) => {
        try {
            const response = await api.get<User>(`api/user/search-by-email?email=${email}`);
            setUser(response.data);
        } catch (error: any) {
            const data = error.response.data;

            for (const [fieldName, value] of Object.entries(data.errors)) {
                setError(fieldName as keyof SearchUserByEmail, {
                    message: value as string,
                });
            }
        }
    };

    return (
        <>
            <Dialog.Title
                title={t("components.create_device_transfer.title")}
                titleStyle={styles.title}
            />

            <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange } }) => (
                    <Input
                        label={t("forms.search_user.title")}
                        value={value}
                        onChangeText={onChange}
                        errorMessage={errors.email?.message}
                        maxLength={255}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        rightIcon={{
                            type: "material-community",
                            name: "account-arrow-down-outline",
                            color: theme.colors.primary,
                        }}
                    />
                )}
            />

            <MainButton
                title={t("buttons.search")}
                onPress={handleSubmit(onSubmit)}
            />
        </>
    );
}