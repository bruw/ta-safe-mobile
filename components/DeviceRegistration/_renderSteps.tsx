import React, { useState } from 'react';
import BrandSelectionStep from './_brandSelectionStep';
import DeviceModelSelectionStep from './_deviceModelSelectionStep';

export default function RenderSteps() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const previousStep = () => setStep(step - 1);

    switch (step) {
        case 1:
            return <BrandSelectionStep onNext={nextStep} />;
        case 2:
            return <DeviceModelSelectionStep onNext={nextStep} onPrevious={previousStep} />;
        default:
            return <></>;
    }
};
