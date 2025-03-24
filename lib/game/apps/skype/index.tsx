import { useGameActions, useGameState } from "../../../state/context";
import Sidebar from "./components/sidebar";
import ChatWindow from "./components/chat";
import ProfileView from "./components/profile";
import { useEffect } from "react";
import { contacts } from "./common/constants";

const Skype = () => {
  const state = useGameState();
  const actions = useGameActions();
  const { viewingProfile, viewedChats, viewedEvidence } = state.skype;

  const { scene } = state;
  const { setScene } = actions;

  useEffect(() => {
    const allChatsViewed = viewedChats.length === 6;
    const evidenceViewed = viewedEvidence.includes(
      contacts[contacts.length - 1].name
    );

    if (allChatsViewed && evidenceViewed) {
      setScene(scene + 1);
    }
  }, [viewedChats, viewedEvidence, setScene]);

  return (
    <div className="skype-app relative flex w-full h-screen max-h-screen bg-white overflow-hidden">
      <Sidebar />
      <div className="w-3/4 px-4 py-2 h-full">
        {viewingProfile ? <ProfileView /> : <ChatWindow />}
      </div>
    </div>
  );
};

export default Skype;
