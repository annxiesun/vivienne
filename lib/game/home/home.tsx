import { GameContextProvider } from "../../state/context";
import { useState } from "react";
import ButtonComponent from "../../components/button-component";
import Skype from "../apps/skype";

export const Home = () => {
  const [activeApp, setActiveApp] = useState(null);

  const handleAppClick = (appName) => {
    setActiveApp(appName);
  };

  return (
    <GameContextProvider>
      <div
        className="flex justify-center items-center flex-col h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/bg/bg.png')",
        }}
      >
        <div className="grid gap-6 p-6 absolute top-6 left-6 grid-cols-1">
          <ButtonComponent
            imageSrc="/assets/apps/instagram.png"
            altText="Instagram"
            onClick={() => handleAppClick("Instagram")}
          />
          <ButtonComponent
            imageSrc="/assets/apps/chatgpt.png"
            altText="ChatGPT"
            onClick={() => handleAppClick("ChatGPT")}
          />
          <ButtonComponent
            imageSrc="/assets/apps/notes.png"
            altText="Notes"
            onClick={() => handleAppClick("Notes")}
          />
          <ButtonComponent
            imageSrc="/assets/apps/mail.png"
            altText="Mail"
            onClick={() => handleAppClick("Mail")}
          />
          <ButtonComponent
            imageSrc="/assets/apps/skype.png"
            altText="Skype™"
            onClick={() => handleAppClick("Skype")}
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
    </GameContextProvider>
  );
};

export default Home;
