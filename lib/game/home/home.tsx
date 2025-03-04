import {
  GameContextProvider,
  useGameActions,
  useGameState,
} from "../../state/context";
import { useState } from "react";
import ButtonComponent from "../../components/button-component";
import Skype from "../apps/skype";
import { BadgeAlert } from "lucide-react";
import { HOME_THOUGHTS } from "../../constants";

export const Home = () => {
  const { scene } = useGameState();
  console.log(scene);
  const { setScene } = useGameActions();
  const [activeApp, setActiveApp] = useState(null);
  const [showModal, setShowModal] = useState(false); // thought modal to help guide the user through gameplay. set message based on game state
  const [modalMessage, setModalMessage] = useState(HOME_THOUGHTS[scene]);

  const handleAppClick = (appName) => {
    setActiveApp(appName);
  };

  const handleCloseApp = () => {
    setActiveApp(null);
    setModalMessage(HOME_THOUGHTS[scene + 1]);
    setScene(scene + 1);
  };

  return (
    <div
      className="flex justify-center items-center flex-col h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/bg/bg.png')",
      }}
    >
      {/* Alert */}
      <div
        className="absolute top-6 right-6 cursor-pointer animate-pulse"
        onClick={() => setShowModal(true)}
      >
        <BadgeAlert className="text-red-500 w-12 h-12" />
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-sm shadow-xl opacity-90 backdrop-blur-md border border-gray-200">
            <div className="flex justify-center mb-4">
              <span className="text-3xl animate-pulse">💭</span>
            </div>
            <div className="relative">
              <p className="text-gray-600 text-sm italic text-center">
                {modalMessage}
              </p>
            </div>
            <button
              className="absolute top-0 right-0 text-gray-700 rounded-full p-2"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <div className="grid gap-6 p-6 absolute top-6 left-6 lg:grid-cols-1 md:grid-cols-2">
        <ButtonComponent
          imageSrc="/assets/apps/notes.png"
          altText="Notes"
          onClick={() => handleAppClick("Notes")}
          onClose={handleCloseApp}
        />
        <ButtonComponent
          imageSrc="/assets/apps/instagram.png"
          altText="Instagram"
          onClick={() => handleAppClick("Instagram")}
          onClose={handleCloseApp}
          disabled={scene < 1}
        />
        <ButtonComponent
          imageSrc="/assets/apps/chatgpt.png"
          altText="ChatGPT"
          onClick={() => handleAppClick("ChatGPT")}
          onClose={handleCloseApp}
          disabled={scene < 2}
        />
        <ButtonComponent
          imageSrc="/assets/apps/mail.png"
          altText="Mail"
          onClick={() => handleAppClick("Mail")}
          onClose={handleCloseApp}
          disabled={scene < 3}
        />
        <ButtonComponent
          imageSrc="/assets/apps/skype.png"
          altText="Skype™"
          onClick={() => handleAppClick("Skype")}
          onClose={handleCloseApp}
          disabled={scene < 4}
        >
          <Skype />
        </ButtonComponent>
      </div>

      {/* Taskbar at the bottom of the screen */}
      <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-60 p-4 flex justify-between items-center shadow-xl">
        <div className="text-lg font-bold text-white"></div>
        <div className="flex items-center">
          <div className="text-gray-800 font-medium text-sm">
            {activeApp ? `Last App Opened: ${activeApp}` : "No app open"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
