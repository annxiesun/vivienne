import React, { useState, useEffect } from "react";
import { endings } from "./common/constants";

interface EndScreenProps {
  onRestart: () => void;
  endingType: number;
}

const EndScreen = ({ onRestart, endingType }: EndScreenProps) => {
  const [step, setStep] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleNextStep = () => {
    if (step <= endings[endingType].length) {
      setStep(step + 1);
    } else {
      onRestart();
    }
  };

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // Function to simulate typing effect
  useEffect(() => {
    if (step >= 0 && step <= endings[endingType].length) {
      const text = endings[endingType];
      let i = 0;

      setTypedText((text[step] && text[step].info[0]) || "");
      setIsTyping(true);

      const typingInterval = setInterval(() => {
        if (text[step] && i < text[step].info.length - 1) {
          setTypedText((prev) => prev + text[step].info[i]);
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 20);

      return () => clearInterval(typingInterval);
    }
  }, [step, endingType]);

  const isLastStep = step === endings[endingType].length;

  return (
    <div className="flex justify-center items-center flex-col h-screen bg-black text-white">
      {isLastStep ? (
        <>
          <p className="text-[100px]">END</p>
          <div className="flex justify-center gap-8">
            <button
              onClick={handlePreviousStep}
              className="text-white text-3xl rounded-full px-6 py-4 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              ←
            </button>
            <button
              onClick={onRestart}
              className="text-white text-3xl rounded-full px-6 py-4 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              ↻
            </button>
          </div>
        </>
      ) : (
        <>
          <img
            src={endings[endingType][step].image}
            className="w-[300px] h-[300px] object-cover"
            alt="Ending scene"
          />

          <p className="text-[24px] text-center max-w-[80%] mx-auto p-4 absolute bottom-48">
            {typedText}
          </p>
          {!isTyping && (
            <div className="flex justify-center gap-8 absolute bottom-20">
              <button
                onClick={handlePreviousStep}
                className="text-white text-3xl rounded-full px-6 py-4 transition-all duration-300 ease-in-out transform hover:scale-110"
                hidden={step === 0}
              >
                ←
              </button>
              <button
                onClick={handleNextStep}
                className="text-white text-3xl rounded-full px-6 py-4 transition-all duration-300 ease-in-out transform hover:scale-110"
              >
                →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EndScreen;
