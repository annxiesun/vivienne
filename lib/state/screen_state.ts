import { useState } from "react";

export type ScreenState = {
  hasStarted: boolean;
  hasEnded: boolean;
  endingType: number;
};

export type ScreenActions = {
  toggleStart: (start: boolean) => void;
  toggleEnd: (end: boolean) => void;
  setEndingType: (ending: number) => void;
  startGame: () => void;
  endGame: () => void;
  restartGame: () => void;
};

export const useScreenContext = () => {
  const [hasStarted, setHasStarted] = useState<boolean>(true); // {DEBUG} (skip intro when developing)
  const [hasEnded, setHasEnded] = useState<boolean>(true); // {DEBUG}
  const [endingType, setEndingType] = useState(3); // {DEBUG} pick ending

  return {
    screen_state: {
      hasStarted,
      hasEnded,
      endingType,
    },
    screen_actions: {
      toggleStart: (start: boolean) => {
        setHasStarted(start);
      },
      toggleEnd: (end: boolean) => {
        setHasEnded(end);
      },
      setEndingType: (ending: number) => {
        setEndingType(ending);
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
