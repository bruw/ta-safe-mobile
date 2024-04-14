import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import RenderSteps from './_renderSteps';

export default function DeviceRegistration() {
    const formControls = useForm();

    return (
        <FormProvider {...formControls}>
            <RenderSteps />
        </FormProvider>
    );
};
