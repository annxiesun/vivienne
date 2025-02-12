import { GameContextProvider } from "../../state/context";
import ExampleComponent from "./example-component";

export const Home = () => {
  return (
    <GameContextProvider>
      <div className="flex justify-center items-center flex-col h-screen">
        <p className="text-[100px]">Vivienne</p>
        <ExampleComponent />
      </div>
    </GameContextProvider>
  );
};

export default Home;
