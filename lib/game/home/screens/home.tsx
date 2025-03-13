import { useGameActions, useGameState } from "../../../state/context";
import { useState } from "react";
import AppButton from "../../../components/app_button";
import Skype from "../../apps/skype";
import Notes from "../../apps/notes";
import { HOME_THOUGHTS } from "../../../constants";
import ThoughtButton from "../../../components/thought_button";
import GlobalModal from "../../../components/global_modal";
import Instagram from "../../apps/instagram";

export const Home = () => {
  const { scene, showModal } = useGameState();
  const { setScene } = useGameActions();
  const [activeApp, setActiveApp] = useState(null);
  const [modalMessage, setModalMessage] = useState(HOME_THOUGHTS[scene]);

  console.log(activeApp);

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
      <ThoughtButton
        thought={modalMessage}
        className="absolute top-6 right-6 cursor-pointer animate-pulse text-3xl"
      />
      {showModal && <GlobalModal />}

      <div className="grid gap-6 p-6 absolute top-6 left-6 grid-cols-1">
        <AppButton
          imageSrc="/assets/apps/notes.png"
          altText="Notes"
          onClick={() => handleAppClick("Notes")}
          onClose={handleCloseApp}
        >
          <Notes />
        </AppButton>
        <AppButton
          imageSrc="/assets/apps/instagram.png"
          altText="Instagram"
          onClick={() => handleAppClick("Instagram")}
          onClose={handleCloseApp}
          disabled={scene < 1}
        >
          <Instagram />
        </AppButton>
        <AppButton
          imageSrc="/assets/apps/chatgpt.png"
          altText="ChatGPT"
          onClick={() => handleAppClick("ChatGPT")}
          onClose={handleCloseApp}
          disabled={scene < 2}
        />
        <AppButton
          imageSrc="/assets/apps/mail.png"
          altText="Mail"
          onClick={() => handleAppClick("Mail")}
          onClose={handleCloseApp}
          disabled={scene < 3}
        />
        <AppButton
          imageSrc="/assets/apps/skype.png"
          altText="Skype™"
          onClick={() => handleAppClick("Skype")}
          onClose={handleCloseApp}
          disabled={scene < 4}
        >
          <Skype />
        </AppButton>
      </div>

      {/* Taskbar at the bottom of the screen */}
      <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-60 p-4 flex justify-between items-center xl:shadow-xl">
        <div className="text-lg font-bold text-white"></div>
        <div className="flex items-center"></div>
      </div>
    </div>
  );
};

export default Home;
