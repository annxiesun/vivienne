import React, { useState, useEffect } from "react";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  const [step, setStep] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleNextStep = () => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      onStart();
    }
  };

  const introductionText: string[] = [
    "You're a technician in a quiet repair shop.",
    "An older man, Mr. George Thompson, brings in a damaged laptop. He claims it belongs to his granddaughter, Vivienne.",
    "She's been missing for a while, and he wants the laptop wiped.",
    "The laptop is in bad shape, but it's not the hardware that stands out. As you begin your work, you realize there's something strange about the apps and messages on it.",
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

  // Function to simulate typing effect
  useEffect(() => {
    if (step === 0 || step > 0) {
      const text = introductionText[step - 1] || "";
      let i = -1;

      setTypedText("");
      setIsTyping(true);

      const typingInterval = setInterval(() => {
        setTypedText((prev) => prev + text[i]);
        i++;
        if (i === text.length - 1) {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 20);

      return () => clearInterval(typingInterval);
    }
  }, [step]);

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      {step === 0 && (
        <>
          <p className="text-[100px]">Vivienne</p>
          <button
            onClick={handleNextStep}
            className="text-white text-lg p-4 rounded mt-5 transition-all duration-300 ease-in-out transform hover:scale-110"
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
            alt="Step image"
          />
          <p className="text-[24px] text-center max-w-[80%] mx-auto p-4">
            {typedText}
          </p>
          {!isTyping && (
            <button
              onClick={handleNextStep}
              className="text-white text-3xl rounded-full absolute bottom-20 px-6 py-4 transition-all"
            >
              →
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default StartScreen;
