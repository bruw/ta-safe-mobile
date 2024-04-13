import React, { useState } from 'react';
import BrandSelectionStep from './_brandSelectionStep';

export default function RenderSteps() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const previousStep = () => setStep(step - 1);

    switch (step) {
        case 1:
            return <BrandSelectionStep onNext={nextStep} />;
        default:
            return <></>;
    }
};
