import React, { useState } from 'react';
import BrandSelectionStep from './BrandSelectionStep';
import DeviceModelSelectionStep from './DeviceModelSelectionStep';
import DeviceInfoStep from './DeviceInfoStep';

export default function FormSteps() {
    const [step, setStep] = useState<number>(1);

    const nextStep = () => setStep(step + 1);
    const previousStep = () => setStep(step - 1);
    const resetStep = () => setStep(1);

    if (step == 2)
        return <DeviceModelSelectionStep onPrevious={previousStep} onNext={nextStep} />;

    if (step == 3)
        return <DeviceInfoStep resetStep={resetStep} />;

    return <BrandSelectionStep onNext={nextStep} />;

};
