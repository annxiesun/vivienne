import { useGameActions } from "../state/context";

interface ThoughtButtonProps {
  thought: string;
  className?: string;
}

const ThoughtButton = ({ thought, className }: ThoughtButtonProps) => {
  const actions = useGameActions();
  const { toggleModal, setThought, setModalType } = actions;

  return (
    <button
      className={
        className +
        " cursor-pointer ml-2 animate-pulse inline-block text-2xl"
      }
      onClick={() => {
        setThought(thought);
        setModalType("thought");
        toggleModal(true);
      }}
    >
      💭
    </button>
  );
};

export default ThoughtButton;
