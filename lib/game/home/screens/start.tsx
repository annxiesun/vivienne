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
    <div className="flex justify-center items-center flex-col h-screen px-4 relative">
      {step === 0 && (
        <>
          <p className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-bold relative">
            <img
              className="brightness-[1000%] transform -translate-y-1/2 absolute top-[45%] left-[-4vw] w-[10vw]"
              src="/assets/logo.png"
            />
            <span className="text-black inline">V</span>ivienne
          </p>
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
          <div className="flex flex-col justify-center items-center h-screen px-4">
            <img
              src={images[step - 1]}
              className="object-cover w-[40vw] h-[40vw] lg:max-w-[300px] lg:max-h-[300px] sm:max-w-[150px] sm:max-h-[150px] mb-6"
              alt="Step image"
            />

            <p className="text-center mx-auto p-4 xl:text-xl lg:text-lg md:text-md sm:text-sm">
              {typedText}
            </p>

            <div className="flex justify-center gap-6 mt-6 h-[60px]">
              {!isTyping && (
                <>
                  <button
                    onClick={handlePreviousStep}
                    className={`text-white rounded-full px-6 py-4 transition-all duration-300 ease-in-out transform hover:scale-110 xl:text-xl lg:text-lg md:text-md sm:text-sm ${
                      step === 1 ? "invisible" : ""
                    }`}
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="text-white rounded-full px-6 py-4 transition-all duration-300 ease-in-out transform hover:scale-110 xl:text-xl lg:text-lg md:text-md sm:text-sm"
                  >
                    →
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StartScreen;
