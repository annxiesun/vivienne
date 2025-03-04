import React, { useState } from "react";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  const [step, setStep] = useState<number>(0);

  const handleNextStep = () => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      onStart();
    }
  };

  const introductionText: string[] = [
    "You're a technician in a quiet repair shop.",
    "An older man, <name>, brings in a damaged laptop. He claims it's his granddaughter's, Vivienne.",
    "She's been missing for a while, and he needs it repaired quickly.",
    "The laptop is in bad shape, but it's not the hardware that stands out. As you begin your work, you realize there's something strange about the files and messages on it.",
    "Vivienne's life may hold more mysteries than you expected.",
    "Your task is simple: wipe the laptop clean.",
  ];

  const images: string[] = [
    "/assets/intro/repairshop.png",
    "/assets/intro/laptop.png",
    "/assets/intro/missing.png",
    "/assets/intro/files.png",
    "/assets/intro/missing.png",
    "/assets/intro/wipe.png",
  ];

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      {step === 0 && (
        <>
          <p className="text-[100px]">Vivienne</p>
          <button
            onClick={handleNextStep}
            className="text-white text-lg p-4 rounded mt-5"
          >
            START
          </button>
        </>
      )}

      {step > 0 && step < 7 && (
        <>
          <img
            src={images[step - 1]}
            className="w-[300px] h-[300px] object-cover mb-5"
          />
          <p className="text-[24px] text-center max-w-[80%] mx-auto p-4">
            {introductionText[step - 1]}
          </p>
          <button
            onClick={handleNextStep}
            className="text-white text-lg p-4 rounded mt-5"
          >
            →
          </button>
        </>
      )}
    </div>
  );
};

export default StartScreen;
