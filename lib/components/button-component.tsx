import { ReactNode, useState } from "react";
import AppBase from "../game/apps/app_base";

interface ButtonComponentProps {
  label: string;
  children?: ReactNode;
}

export default function ButtonComponent({
  label,
  children = null,
}: ButtonComponentProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-pink-300 text-white rounded-lg hover:bg-pink-400 w-32"
      >
        {label}
      </button>

      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-400 flex justify-center items-center">
          <AppBase title={label}>
            {children}
            <button
              onClick={handleClose}
              className="absolute p-1 top-2 right-2 text-white bg-red-500 hover:bg-gray-300 transition font-bold"
            >
              &times;
            </button>
          </AppBase>
        </div>
      )}
    </div>
  );
}
