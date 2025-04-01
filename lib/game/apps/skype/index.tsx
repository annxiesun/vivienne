import { useGameActions, useGameState } from "../../../state/context";
import Sidebar from "./components/sidebar";
import ChatWindow from "./components/chat";
import ProfileView from "./components/profile";
import { useEffect } from "react";

const Skype = () => {
  const state = useGameState();
  const actions = useGameActions();
  const { viewingProfile, viewedChats } = state.skype;

  const { scene } = state;
  const { setScene } = actions;

  useEffect(() => {
    const allChatsViewed = viewedChats.length === 6;

    if (allChatsViewed && scene == 4) {
      setScene(scene + 1);
    }
  }, [viewedChats, setScene]);

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
