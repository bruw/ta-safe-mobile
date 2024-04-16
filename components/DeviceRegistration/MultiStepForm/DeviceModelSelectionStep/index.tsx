import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useFormContext } from 'react-hook-form';
import api from 'services/api/api';
import { DeviceModel } from 'types/ApiTypes';
import { t } from 'i18next';
import ButtonNextStep from '../ButtonNextStep';
import StepTitle from '../StepTitle';
import ButtonPreviousStep from '../ButtonPreviousStep';
import { stylesDeviceModelSelection } from "./_styles";

interface DeviceModelSelectionStepProps {
    onPrevious: () => void;
    onNext: () => void;
}

export default function DeviceModelSelectionStep({ onPrevious, onNext }: DeviceModelSelectionStepProps) {
    const styles = stylesDeviceModelSelection();
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

        setDisabledNextStep(
            watch('device_model_id') ? false : true
        );

        fetchBrands();
    }, []);

    return (
        <View style={styles.container}>
            <StepTitle
                span={t("forms.deviceRegistration.modelStep.titleSpan")}
                content={t("forms.deviceRegistration.modelStep.titleContent")}
                style={styles.stepTitle}
            />

            <View style={[styles.selectBrand]}>
                <Picker
                    selectedValue={watch('device_model_id')}
                    onValueChange={(itemValue) => {
                        setValue('device_model_id', itemValue);
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
                    fieldName='device_model_id'
                    onPrevious={onPrevious}
                />

                <ButtonNextStep
                    onNext={onNext}
                    disabled={disabledNextStep}
                />
            </View>
        </View>
    );
};