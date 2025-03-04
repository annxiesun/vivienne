import { GameContextProvider } from "../../state/context";
import { GAME_NAME } from "../../constants";
import ButtonComponent from "../../components/button-component";
import Skype from "../apps/skype";

export const Home = () => {
  return (
    <GameContextProvider>
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="grid grid-cols-3 gap-2">
          <ButtonComponent label="Instagram" />
          <ButtonComponent label="ChatGPT" />
          <ButtonComponent label="Messages" />
          <ButtonComponent label="Notes" />
          <ButtonComponent label="Mail" />
          <ButtonComponent label="Skype™">
            <Skype />
          </ButtonComponent>
        </div>
      </div>
    </GameContextProvider>
  );
};

export default Home;
