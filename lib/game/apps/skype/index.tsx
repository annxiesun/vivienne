import { useGameActions, useGameState } from "../../../state/context";
import Sidebar from "./components/sidebar";
import ChatWindow from "./components/chat";
import ProfileView from "./components/profile";
import ImageModal from "./components/image";
import GlobalModal from "../../../components/global_modal";
import DecisionButton from "../../../components/decision_button";

const Skype = () => {
  const { skype, showModal } = useGameState();
  const { toggleModal } = useGameActions();

  return (
    <div className="skype-app relative flex w-full h-screen max-h-screen bg-white overflow-hidden">
      <DecisionButton
        decision={{
          question: "Should I wipe Skype history?",
          info: "If you wipe Skype, the messages will be gone forever.",
          option1: "Wipe Skype",
          onClick1: () => console.log("chose option 1"),
          option2: "Leave it",
          onClick2: () => toggleModal(false),
        }}
        className="absolute m-1 top-0 right-0 w-12 h-12"
      />
      <Sidebar />
      <div className="w-3/4 px-4 py-2 h-full">
        {skype.viewingProfile ? <ProfileView /> : <ChatWindow />}
      </div>
      {skype.showImageModal && <ImageModal />}
      {showModal && <GlobalModal />}
    </div>
  );
};

export default Skype;
