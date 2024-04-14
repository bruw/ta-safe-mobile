import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { makeStyles } from "@rneui/themed";
import { Picker } from '@react-native-picker/picker';
import { useFormContext } from 'react-hook-form';
import api from 'services/api/api';
import { DeviceModel } from 'types/ApiTypes';
import { t } from 'i18next';
import ButtonNextStep from './_buttonNextStep';
import StepTitle from './_stepTitle';
import ButtonPreviousStep from './_buttonPreviousStep';

interface DeviceModelSelectionStepProps {
    onNext: () => void;
    onPrevious: () => void;
}

export default function DeviceModelSelectionStep({ onNext, onPrevious }: DeviceModelSelectionStepProps) {
    const styles = useStyles();
    const { setValue, watch } = useFormContext();
    const selectedBrandId = watch('brand_id');

    const [deviceModels, setDeviceModels] = useState<DeviceModel[]>([]);
    const [disabledNextStep, setDisabledNextStep] = useState(true);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await api.get<DeviceModel[]>(`api/device-models/brands/${selectedBrandId}`);
                setDeviceModels(response.data);

            } catch (error: any) {
                // talvez exibir uma tela de erro...
                console.error('Ocorreu um erro:', error);
            }
        };

        fetchBrands();
    }, []);

    return (
        <View style={styles.container}>
            <StepTitle
                span={t("forms.deviceRegistration.modelStep.titleSpan")}
                content={t("forms.deviceRegistration.modelStep.titleContent")}
            />

            <View style={[styles.selectBrand]}>
                <Picker
                    selectedValue={watch('model_id')}
                    onValueChange={(itemValue) => {
                        setValue('model_id', itemValue);
                        setDisabledNextStep(itemValue == "");
                    }}
                    numberOfLines={4}
                >
                    <Picker.Item
                        label={t("forms.deviceRegistration.modelStep.selectModel")}
                        value=""
                    />

                    {deviceModels.map((model) => (
                        <Picker.Item
                            key={model.id}
                            label={`${model.name} \nRam: ${model.ram} \nArmazenamento: ${model.storage}`}
                            value={model.id}
                        />
                    ))}
                </Picker>
            </View>

            <View style={styles.stepButtons}>

                <ButtonPreviousStep
                    fieldName='model_id'
                    onPrevious={onPrevious}
                />

                <ButtonNextStep
                    onNext={onNext}
                    disabledNextStep={disabledNextStep}
                />

            </View>
        </View>
    );
};

const useStyles = makeStyles(() => ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    selectBrand: {
        width: "90%",
        borderBottomWidth: 1,
        borderColor: "#86939E",
        marginBottom: 40,
    },
    stepButtons: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
    }
}));