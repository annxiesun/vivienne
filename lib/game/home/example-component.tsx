import { useCallback } from "react";
import { useGameActions, useGameState } from "../../state/context";

export const ExampleComponent = () => {
  const { count } = useGameState();
  const { setCount } = useGameActions();

  const increment = useCallback(() => {
    setCount(x => x+1)
  }, [])

  return (
    <button onClick={increment}>{"Click me! "}{count}</button>
  );
};

export default ExampleComponent;
