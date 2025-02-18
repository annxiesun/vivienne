import { GameContextProvider } from "../../state/context";
import { GAME_NAME } from "../../constants";
import ButtonComponent from "./button-component";

export const Home = () => {
  return (
    <GameContextProvider>
      <div className="flex justify-center items-center flex-col h-screen">
        <p className="text-[100px]">{GAME_NAME}</p>
        <div className="grid grid-cols-3 gap-2">
          <ButtonComponent label="Instagram" />
          <ButtonComponent label="ChatGPT" />
          <ButtonComponent label="Messages" />
          <ButtonComponent label="Notes" />
          <ButtonComponent label="Mail" />
          <ButtonComponent label="Skype" />
        </div>
      </div>
    </GameContextProvider>
  );
};

export default Home;
