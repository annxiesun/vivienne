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
      <div className="flex justify-center items-center">
        <img
          src={modalMessage}
          className="max-w-[50%] max-h-[50%] rounded-lg shadow-lg object-contain"
        />
      </div>
    </div>
  );
};

export default ImageModal;
