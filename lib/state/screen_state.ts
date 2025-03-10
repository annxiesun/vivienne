import { useState } from "react";

export type ScreenState = {
  hasStarted: boolean;
  hasEnded: boolean;
};

export type ScreenActions = {
  toggleStart: (start: boolean) => void;
  toggleEnd: (end: boolean) => void;
  startGame: () => void;
  endGame: () => void;
  restartGame: () => void;
};

export const useScreenContext = () => {
  const [hasStarted, setHasStarted] = useState<boolean>(true); // {DEBUG} (skip intro when developing)
  const [hasEnded, setHasEnded] = useState<boolean>(false); // {DEBUG}

  return {
    screen_state: {
      hasStarted,
      hasEnded,
    },
    screen_actions: {
      toggleStart: (start: boolean) => {
        setHasStarted(start);
      },
      toggleEnd: (end: boolean) => {
        setHasEnded(end);
      },
      startGame: () => {
        setHasStarted(true);
        setHasEnded(false);
      },
      endGame: () => {
        setHasEnded(true);
      },
      restartGame: () => {
        setHasEnded(false);
        setHasStarted(false);
      },
    },
  };
};
