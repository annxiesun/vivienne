import { ReactNode, useState } from "react";
import AppBase from "../game/apps/app_base";

interface ButtonComponentProps {
  imageSrc: string;
  altText: string;
  onClick: () => void;
  onClose: () => void;
  disabled?: boolean;
  children?: ReactNode;
}

export default function ButtonComponent({
  imageSrc,
  altText,
  onClick,
  onClose,
  disabled = false,
  children = null,
}: ButtonComponentProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    onClick();
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`group w-32 h-32 flex justify-center items-center relative rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 ${
          isVisible ? "pointer-events-none" : ""
        }`}
        disabled={disabled}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="object-contain w-[100px] h-[100px]"
        />
      </button>

      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10">
          <AppBase title={altText}>
            {children}
            <button
              onClick={() => {
                handleClose();
                onClose();
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
