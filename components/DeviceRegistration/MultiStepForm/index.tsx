import React, { useState } from 'react';
import BrandSelectionStep from './BrandSelectionStep';
import DeviceModelSelectionStep from './DeviceModelSelectionStep';

export default function FormSteps() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const previousStep = () => setStep(step - 1);

    switch (step) {
        case 1:
            return <BrandSelectionStep onNext={nextStep} />;
        case 2:
            return <DeviceModelSelectionStep onPrevious={previousStep} onNext={nextStep} />;
        default:
            return <></>;
    }
};
