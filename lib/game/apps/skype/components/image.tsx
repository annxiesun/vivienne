import { useGameActions, useGameState } from "../../../../state/context";

const ImageModal = () => {
  const state = useGameState();
  const actions = useGameActions();

  const { modalMessage, showImageModal } = state.skype;
  const { toggleImageModal } = actions.skype;

  if (!showImageModal) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
      onClick={() => toggleImageModal(false)}
    >
      <div className="relative">
        <img
          src={modalMessage}
          className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ImageModal;
