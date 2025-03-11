import { useGameActions, useGameState } from "../../../state/context";
import Sidebar from "./components/sidebar";
import ChatWindow from "./components/chat";
import ProfileView from "./components/profile";
import ImageModal from "./components/image";
import EvidenceModal from "../../../components/evidence";
import EvidenceButton from "../../../components/evidence_button";

const Skype = () => {
  const { skype, showEvidenceModal } = useGameState();
  const { toggleEvidenceModal } = useGameActions();

  return (
    <div className="skype-app relative flex w-full h-screen max-h-screen bg-white overflow-hidden">
      <EvidenceButton
        evidence={
          <>
            <div className="p-6 text-center">
              <h2 className="font-bold text-lg text-gray-700">
                Should I wipe Skype history?
              </h2>
              <p className="text-gray-600 text-sm italic">
                If you wipe Skype, the messages will be gone forever.
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700"
                  onClick={() => {
                    console.log("Skype wiped!"); // Replace with state update or game logic
                  }}
                >
                  Wipe Skype
                </button>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
                  onClick={() => toggleEvidenceModal(false)}
                >
                  Leave it
                </button>
              </div>
            </div>
          </>
        }
        className="absolute m-1 top-0 right-0 w-12 h-12"
      />
      <Sidebar />
      <div className="w-3/4 px-4 py-2 h-full">
        {skype.viewingProfile ? <ProfileView /> : <ChatWindow />}
      </div>
      {skype.showImageModal && <ImageModal />}
      {showEvidenceModal && <EvidenceModal />}
    </div>
  );
};

export default Skype;
