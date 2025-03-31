import React, { useState, useEffect } from "react";
import { getEnding } from "./common/endings";
import { useGameState } from "../../../state/context";

interface EndScreenProps {
  onRestart: () => void;
}

const EndScreen = ({ onRestart }: EndScreenProps) => {
  const [step, setStep] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const state = useGameState();
  const { foundNote } = state.notes
  const { reported, wiped, emailSent, defaultEnd } = state.screen

  const ending = getEnding(reported, wiped, foundNote, emailSent, defaultEnd);

  const handleNextStep = () => {
    if (step <= ending.length) {
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
  // step = index of ending arr
  useEffect(() => {
    if (step >= 0 && step <= ending.length - 1) {
      const text = ending;
      let i = 0;

      setTypedText(text[step].info[0] || "");
      setIsTyping(true);

      const typingInterval = setInterval(() => {
        if (i < text[step].info.length - 1) {
          setTypedText((prev) => prev + text[step].info[i]);
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 20);

      return () => clearInterval(typingInterval);
    }
  }, [step]);

  const isLastStep = step === ending.length;

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
            src={ending[step].image}
            className="object-cover w-[40vw] h-[40vw] max-w-[300px] max-h-[300px]"
            alt="Ending scene"
          />

          <p className="text-center mx-auto p-4 absolute lg:bottom-44 md:bottom-40 bottom-24 xl:text-xl lg:text-lg md:text-md sm:text-sm">
            {typedText}
          </p>
          {!isTyping && (
            <div className="absolute lg:bottom-30 md:bottom-20 bottom-10 text-xl xl:text-xl lg:text-lg md:text-md sm:text-sm flex justify-center gap-6">
              <button
                onClick={handlePreviousStep}
                className="text-white rounded-full px-6 py-4 transition-all duration-300 ease-in-out transform hover:scale-110"
                hidden={step === 0}
              >
                ←
              </button>
              <button
                onClick={handleNextStep}
                className="text-white rounded-full px-6 py-4 transition-all duration-300 ease-in-out transform hover:scale-110"
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
