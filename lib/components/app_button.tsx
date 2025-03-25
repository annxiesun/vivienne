import { ReactNode, useState } from "react";
import AppBase from "../game/apps/app_base";

interface AppButtonProps {
  imageSrc: string;
  altText: string;
  disabled?: boolean;
  children?: ReactNode;
}

export default function AppButton({
  imageSrc,
  altText,
  disabled = false,
  children = null,
}: AppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`flex justify-center items-center relative rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 ${
          isVisible ? "pointer-events-none" : ""
        }`}
        disabled={disabled}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="object-contain w-[12vh] h-[12vh]"
        />
      </button>

      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10">
          <AppBase title={altText}>
            {children}
            <button
              onClick={() => {
                handleClose();
              }}
              className="absolute p-1 top-2 right-2 text-white bg-red-500 transition font-bold"
            >
              &times;
            </button>
          </AppBase>
        </div>
      )}
    </div>
  );
}
