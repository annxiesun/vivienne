import { Sparkle } from "lucide-react";
import { useGameActions } from "../state/context";

interface ThoughtButtonProps {
  thought: string;
  className?: string;
}

const ThoughtButton = ({ thought, className }: ThoughtButtonProps) => {
  const actions = useGameActions();
  const { toggleModal, setThought, setModalType } = actions;

  return (
    <Sparkle
      className={
        className + " text-blue-500 cursor-pointer ml-2 animate-pulse inline-block h-12 w-12"
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
