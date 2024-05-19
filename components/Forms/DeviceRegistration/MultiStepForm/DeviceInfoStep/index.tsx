import { useTheme } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import StepTitle from "../StepTitle";
import { Button, Input } from "@rneui/base";
import { ScrollView } from "react-native-gesture-handler";
import { t } from "i18next";
import { stylesDeviceInfo } from "./_styles";
import { DeviceRegistration } from "types/ApiTypes";
import api from "services/api/api";
import notify from "helpers/notify";
import { useRouter } from "expo-router";
import { hideMessage } from "react-native-flash-message";
import { maskOnlyNumbers } from "helpers/maskOnlyNumbers";

interface DeviceInfoProps {
    resetStep: () => void;
}

export default function DeviceInfoStep({ resetStep }: DeviceInfoProps) {
    const styles = stylesDeviceInfo();
    const { theme } = useTheme();
    const router = useRouter();

    const {
        control,
        watch,
        reset,
        handleSubmit,
        setError,
        formState: { errors },
    } = useFormContext<DeviceRegistration>();

    const onSubmit = async ({
        color,
        access_key,
        imei_1,
        imei_2
    }: DeviceRegistration) => {
        try {
            const response = await api.post("/api/devices", {
                device_model_id: watch('device_model_id'),
                color,
                access_key,
                imei_1,
                imei_2
            });

            notify({
                type: response.data.message.type,
                message: response.data.message.text
            });

            reset();
            resetStep();

            router.push("/(auth)/(drawer)/my-devices")

        } catch (error: any) {
            const data = error.response.data;

            notify({ type: data.message.type, message: data.message.text });

            for (const [fieldName, value] of Object.entries(data.errors)) {
                setError(fieldName as keyof DeviceRegistration, {
                    message: value as string,
                });
            }
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <StepTitle
                    span={t("forms.deviceRegistration.deviceInfoStep.titleSpan")}
                    content={t("forms.deviceRegistration.deviceInfoStep.titleContent")}
                    style={styles.StepTitle}
                />

                <View style={styles.info}>
                    <View style={styles.defaultSpacing}>
                        <Controller
                            name="color"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <Input
                                    label={t("labels.color")}
                                    value={value}
                                    onChangeText={onChange}
                                    errorMessage={errors.color?.message}
                                    maxLength={50}
                                    rightIcon={{
                                        type: "material-community",
                                        name: "invert-colors",
                                        color: theme.colors.primary,
                                    }}
                                />
                            )}
                        />
                    </View>

                    <View style={styles.defaultSpacing}>
                        <Controller
                            name="access_key"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <Input
                                    label={t("forms.deviceRegistration.deviceInfoStep.access_key")}
                                    value={value}
                                    onChangeText={(text) => onChange(maskOnlyNumbers(text))}
                                    errorMessage={errors.access_key?.message}
                                    maxLength={44}
                                    keyboardType="numeric"
                                    rightIcon={{
                                        type: "material-community",
                                        name: "barcode",
                                        color: theme.colors.primary,
                                    }}
                                />
                            )}
                        />
                    </View>

                    <View style={styles.defaultSpacing}>
                        <Controller
                            name="imei_1"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <Input
                                    label={t("labels.imei_1")}
                                    value={value}
                                    onChangeText={(text) => onChange(maskOnlyNumbers(text))}
                                    errorMessage={errors.imei_1?.message}
                                    maxLength={15}
                                    keyboardType="numeric"
                                    rightIcon={{
                                        type: "material-community",
                                        name: "cellphone-text",
                                        color: theme.colors.primary,
                                    }}
                                />
                            )}
                        />
                    </View>

                    <View style={styles.defaultSpacing}>
                        <Controller
                            name="imei_2"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <Input
                                    label={t("labels.imei_2")}
                                    value={value}
                                    onChangeText={(text) => onChange(maskOnlyNumbers(text))}
                                    errorMessage={errors.imei_2?.message}
                                    maxLength={15}
                                    keyboardType="numeric"
                                    rightIcon={{
                                        type: "material-community",
                                        name: "cellphone-text",
                                        color: theme.colors.primary,
                                    }}
                                />
                            )}
                        />
                    </View>
                </View>

                <View style={styles.buttons}>
                    <Button
                        title="Cancelar"
                        onPress={() => {
                            reset();
                            resetStep();
                            hideMessage();
                        }}
                        buttonStyle={styles.cancelButton}
                        icon={{
                            type: "material-community",
                            name: "close",
                            color: "#fff",
                        }}
                    />

                    <Button
                        title={t("labels.register")}
                        onPress={handleSubmit(onSubmit)}
                        buttonStyle={styles.registerButton}
                        icon={{
                            type: "material-community",
                            name: "check",
                            color: "#fff",
                        }}
                    />

                </View>
            </View>
        </ScrollView>
    );
}
