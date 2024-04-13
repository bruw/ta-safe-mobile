import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useFormContext } from 'react-hook-form';
import api from 'services/api/api';
import { Brand } from 'types/ApiTypes';

export default function BrandSelectionStep({ onNext }: any) {
  const { handleSubmit, setValue, watch } = useFormContext();
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Brand[]>('api/brands');
        setBrands(response.data);
        console.log(response.data);

      } catch (error: any) {
        console.error('Ocorreu um erro:', error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
    onNext();
  };

  return (
    <View>
      <Text>Passo 1: Selecione a marca do dispositivo</Text>
      <Picker
        selectedValue={watch('brand_id')}
        onValueChange={(itemId) => {
          setValue('brand_id', itemId);
        }}
      >

        <Picker.Item label="Selecione a marca" value="" />
        {
          brands.map((brand) => (
            <Picker.Item key={brand.id} label={brand.name} value={brand.id} />
          ))
        }

      </Picker>

      <Button title="Próximo" onPress={handleSubmit(onSubmit)} />

    </View>
  );
};
