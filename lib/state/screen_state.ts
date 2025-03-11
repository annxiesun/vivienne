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
  const [hasStarted, setHasStarted] = useState<boolean>(false); // {DEBUG}
  const [hasEnded, setHasEnded] = useState<boolean>(false); // {DEBUG}
  const [endingType, setEndingType] = useState(0); // {DEBUG} pick ending

  return {
    screen_state: {
      hasStarted,
      hasEnded,
      endingType
    },
    screen_actions: {
      toggleStart: (start: boolean) => {
        setHasStarted(start);
      },
      toggleEnd: (end: boolean) => {
        setHasEnded(end);
      },
      setEndingType: (ending: number) => {
        setEndingType(ending)
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
