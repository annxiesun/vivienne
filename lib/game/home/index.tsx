import Home from "./screens/home";
import { useGameActions, useGameState } from "../../state/context";
import EndScreen from "./screens/end";
import StartScreen from "./screens/start";
import Login from "./screens/login";

const MainScreen = () => {
  const state = useGameState();
  const actions = useGameActions();
  const { hasStarted, hasEnded, wiped } = state.screen;
  const { startGame } = actions.screen;

  return (
    <>
      {!hasStarted ? (
        <StartScreen onStart={startGame} />
      ) : hasEnded ? (
        <EndScreen />
      ) : wiped ? (
        <Login />
      ) : (
        <Home />
      )}
    </>
  );
};

export default MainScreen;
