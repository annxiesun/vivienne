import { CircleAlert } from "lucide-react";
import { useGameActions } from "../state/context";

interface EvidenceButtonProps {
  evidence: string;
}

const EvidenceButton = ({ evidence = "?" }: EvidenceButtonProps) => {
  const actions = useGameActions();
  const { toggleEvidenceModal, setEvidence } = actions;

  return (
    <CircleAlert
      className="text-red-500 cursor-pointer ml-2 animate-pulse inline-block"
      onClick={() => {
        setEvidence(evidence);
        toggleEvidenceModal(true);
      }}
    />
  );
};

export default EvidenceButton;
