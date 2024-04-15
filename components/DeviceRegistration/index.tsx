import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import MultiStepForm from './MultiStepForm';

export default function DeviceRegistration() {
    const formControls = useForm();

    return (
        <FormProvider {...formControls}>
            <MultiStepForm />
        </FormProvider>
    );
};
