import { useGameActions, useGameState } from "../state/context";

const EvidenceModal = () => {
  const state = useGameState();
  const actions = useGameActions();

  const { showEvidenceModal, evidence } = state;
  const { toggleEvidenceModal } = actions;

  if (!showEvidenceModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-lg max-w-sm shadow-xl opacity-90 backdrop-blur-md border border-gray-200">
        <div className="flex justify-center mb-4">
          <span className="text-3xl animate-pulse">💭</span>{" "}
        </div>
        <div className="relative">{evidence}</div>
        <button
          className="absolute top-0 right-0 text-gray-700 rounded-full p-2"
          onClick={() => toggleEvidenceModal(false)}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default EvidenceModal;
