import { X } from "lucide-react";
import { useGameActions, useGameState } from "../state/context";

const DecisionModal = () => {
  const state = useGameState();
  const actions = useGameActions();

  const { showModal, decision } = state;
  const { toggleModal } = actions;

  if (!showModal) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg max-w-sm shadow-xl backdrop-blur-md">
        <img src={decision.image} className="rounded-t-lg" />
        <div className="p-6">
          <h2 className="font-bold text-lg text-gray-700">
            {decision.question}
          </h2>
          <p className="text-gray-600 text-sm italic">{decision.info}</p>
          <div className="mt-4 flex gap-4">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 w-1/2"
              onClick={decision.onClick1}
            >
              {decision.option1}
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 w-1/2"
              onClick={decision.onClick2}
            >
              {decision.option2}
            </button>
          </div>
        </div>

        <button
          className="absolute top-0 right-0 text-gray-700 rounded-full p-2"
          onClick={() => toggleModal(false)}
        >
          <X />
        </button>
        <div
          className="absolute bg-red-500 w-[50px] h-[50px] top-[-20px] left-[-20px] 
        rounded-full flex items-center justify-center"
        >
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-3 0v-12A1.5 1.5 0 0 1 12 2zm0 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionModal;
