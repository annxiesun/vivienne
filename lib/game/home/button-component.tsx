import { useState } from "react";

export default function ButtonComponent({ label, children = null }) {
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
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-75 flex justify-center items-center z-50">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-2xl font-bold"
          >
            &times;
          </button>
          {children}
        </div>
      )}
    </div>
  );
}
