import { GameContextProvider } from "../../state/context";
import { GAME_NAME } from "../../constants";
import ExampleComponent from "./example-component";

export const Home = () => {
  return (
    <GameContextProvider>
      <div className="flex justify-center items-center flex-col h-screen">
        <p className="text-[100px]">{GAME_NAME}</p>
        <ExampleComponent />
      </div>
    </GameContextProvider>
  );
};

export default Home;
