import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useFormContext } from 'react-hook-form';
import api from 'services/api/api';
import { Brand } from 'types/ApiTypes';
import { t } from 'i18next';
import ButtonNextStep from '../ButtonNextStep';
import StepTitle from '../StepTitle';
import { stylesBrandSelection } from "./_styles";

interface BrandSelectionStepProps {
    onNext: () => void;
}

export default function BrandSelectionStep({ onNext }: BrandSelectionStepProps) {
    const styles = stylesBrandSelection();
    const { setValue, watch } = useFormContext();

    const [brands, setBrands] = useState<Brand[]>([]);
    const [disabledNextStep, setDisabledNextStep] = useState(true);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await api.get<Brand[]>('api/brands');
                setBrands(response.data);

            } catch (error: any) {
                // talvez exibir uma tela de erro...
                console.error('Ocorreu um erro:', error);
            }
        };

        setDisabledNextStep(
            watch('brand_id') ? false : true
        );

        fetchBrands();
    }, []);

    return (
        <View style={styles.container}>
            <StepTitle
                span={t("forms.deviceRegistration.brandStep.titleSpan")}
                content={t("forms.deviceRegistration.brandStep.titleContent")}
                style={{
                    width: "90%",
                    fontSize: 18,
                    textAlign: "center",
                    marginBottom: 40
                }}
            />

            <View style={[styles.selectBrand]}>
                <Picker
                    selectedValue={watch('brand_id')}
                    onValueChange={(itemValue) => {
                        setValue('brand_id', itemValue);
                        setDisabledNextStep(itemValue == "");
                    }}
                >
                    <Picker.Item
                        label={t("forms.deviceRegistration.brandStep.selectBrand")}
                        value=""
                    />

                    {brands.map((brand) => (
                        <Picker.Item key={brand.id} label={brand.name} value={brand.id} />
                    ))}
                </Picker>
            </View>

            <ButtonNextStep
                onNext={onNext}
                disabled={disabledNextStep}
            />
        </View>
    );
};

