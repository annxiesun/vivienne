import { useGameActions } from "../state/context";
import { Sparkle } from "lucide-react";

interface ThoughtButtonProps {
  thought: string;
  className?: string;
}

const ThoughtButton = ({ thought, className }: ThoughtButtonProps) => {
  const actions = useGameActions();
  const { toggleModal, setThought, setModalType } = actions;

  return (
    // need to figure out what icon/symbol to use for this
    <Sparkle
      className={
        className + " text-blue-500 cursor-pointer ml-2 animate-pulse inline-block text-2xl"
      }
      onClick={() => {
        setThought(thought);
        setModalType("thought");
        toggleModal(true);
      }}
    />
  );
};

export default ThoughtButton;
