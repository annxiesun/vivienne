import { useGameState } from "../../../state/context";
import Sidebar from "./components/sidebar";
import ChatWindow from "./components/chat";
import ProfileView from "./components/profile";

const Skype = () => {
  const { skype } = useGameState();

  return (
    <div className="skype-app relative flex w-full h-screen max-h-screen bg-white overflow-hidden">
      <Sidebar />
      <div className="w-3/4 px-4 py-2 h-full">
        {skype.viewingProfile ? <ProfileView /> : <ChatWindow />}
      </div>
    </div>
  );
};

export default Skype;
