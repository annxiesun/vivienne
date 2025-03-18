import { MessageCircleQuestion } from "lucide-react";
import { useGameActions } from "../state/context";
import { Decision } from "../constants";

interface DecisionButtonProps {
  decision: Decision;
  className?: string;
}

const DecisionButton = ({ decision, className }: DecisionButtonProps) => {
  const actions = useGameActions();
  const { toggleModal, setDecision, setModalType } = actions;

  return (
    <MessageCircleQuestion
      className={
        className +
        " text-blue-700 animate-pulse cursor-pointer ml-2 inline-block h-12 w-12"
      }
      onClick={() => {
        setDecision(decision);
        setModalType("decision");
        toggleModal(true);
      }}
    />
  );
};

export default DecisionButton;
