import { CircleAlert } from "lucide-react";
import { useGameActions } from "../state/context";
import { ReactNode } from "react";

interface EvidenceButtonProps {
  evidence: ReactNode;
  className?: string;
}

const EvidenceButton = ({ evidence, className }: EvidenceButtonProps) => {
  const actions = useGameActions();
  const { toggleEvidenceModal, setEvidence } = actions;

  return (
    <CircleAlert
      className={
        className +
        " text-red-500 cursor-pointer ml-2 animate-pulse inline-block"
      }
      onClick={() => {
        setEvidence(evidence);
        toggleEvidenceModal(true);
      }}
    />
  );
};

export default EvidenceButton;
