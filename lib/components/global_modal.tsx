import { useGameState } from "../state/context";
import ThoughtModal from "./thought_modal";
import DecisionModal from "./decision_modal"

const GlobalModal = () => {
  const state = useGameState();

  const { showModal, modalType } = state;

  if (!showModal) return null;

  return modalType === "thought" ? <ThoughtModal /> : <DecisionModal />
};

export default GlobalModal;
