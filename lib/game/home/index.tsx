import Home from "./screens/home"
import { useGameActions, useGameState } from "../../state/context";
import EndScreen from "./screens/end";
import StartScreen from "./screens/start";

const MainScreen = () => {
  const state = useGameState();
  const actions = useGameActions();
  const { hasStarted, hasEnded } = state.screen;
  const { startGame, restartGame, endGame } = actions.screen;

  return (
    <>
      {!hasStarted ? (
        <StartScreen onStart={startGame} />
      ) : hasEnded ? (
        <EndScreen onRestart={restartGame} endingType={4} />
      ) : (
        <Home />
      )}
    </>
  );
};

export default MainScreen;
