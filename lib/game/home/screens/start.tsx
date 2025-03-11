import React, { useState, useEffect } from "react";
import { images, introductionText } from "./common/constants";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  const [step, setStep] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [skipIntro, setSkipIntro] = useState<boolean>(false);

  const handleNextStep = () => {
    if (skipIntro || step >= 6) {
      onStart();
    } else {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    if (step > 0) {
      const text = introductionText[step - 1] || "";
      let i = 0;

      setTypedText(text[0] || "");
      setIsTyping(true);

      const typingInterval = setInterval(() => {
        if (i < text.length - 1) {
          setTypedText((prev) => prev + text[i]);
          i++;
        } else {
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
          <label className="flex items-center mt-4">
            <input
              type="checkbox"
              checked={skipIntro}
              onChange={(e) => setSkipIntro(e.target.checked)}
              className="appearance-none w-5 h-5 border-2 border-white bg-black checked:bg-white checked:border-black focus:outline-none mr-2 cursor-pointer"
            />
            skip intro
          </label>
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
            className="w-[300px] h-[300px] object-cover"
            alt="Step image"
          />
          <p className="text-[24px] text-center max-w-[80%] mx-auto p-4 absolute bottom-40">
            {typedText}
          </p>
          {!isTyping && (
            <div className="flex justify-center gap-8 absolute bottom-20">
              <button
                onClick={handlePreviousStep}
                className="text-white text-3xl rounded-full px-6 py-4 transition-all duration-300 ease-in-out transform hover:scale-110"
                hidden={step === 1}
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

export default StartScreen;
