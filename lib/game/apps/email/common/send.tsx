import DecisionButton from '../../../../components/decision_button';
import { useGameActions, useGameState } from "../../../../state/context";
import { Send } from "lucide-react";



const SendButton = () => {
  const state = useGameState();
  const actions = useGameActions();
  const { toggleModal, setDecision, setModalType } = actions;
  const { emailSent } = state.screen;
  const { setEmailSent } = actions.screen;
  const decision = {
    question:
      "Should I send this draft email request to erase any personal data held under EU General Data Protection Regulation (GDPR)?",
    info:
      "Vivienne mentions wanting to erase anything that she can in her notes, and clearly she wrote this email for a reason. I am not her though, is this a decision for me to make on her behalf?",
    option1: "SEND REQUEST",
    option2: "DON'T SEND",
    image: "/assets/decision/send_email.png",
    onClick1: () => {
      setEmailSent(true);
      toggleModal(false);
    },
    onClick2: () => {
      setEmailSent(false);
      toggleModal(false);
    },
  };

  return (
    // Use return statement to wrap JSX
    <div>
      {emailSent ? (
        <div>
          <button
            disabled
            className="flex flex-row space-x-2 items-center text-gray-400 bg-blue-700 py-2 px-4 rounded-sm"
          >
            <Send />
            <p className="items-center pt-1">Sent</p>
          </button>
        </div>
      ) : (
        <div className="flex flex-row items-center space-x-2">
          <DecisionButton
            decision={decision}
            className="text-pink-400 cursor-pointer animate-pulse !h-6 !w-6 text-3xl"
          />
          <button
            onClick={() => {
              setDecision(decision);
              setModalType("decision");
              toggleModal(true);
              console.log("Email sent");
            }}
            className="flex flex-row space-x-2 items-center text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-sm"
          >
            <Send />
            <p className="items-center pt-1">Send</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default SendButton;
