import { useState } from "react";

export type ScreenState = {
  hasStarted: boolean;
  hasEnded: boolean;
  reported: boolean;
  wiped: boolean;
};

export type ScreenActions = {
  toggleStart: (start: boolean) => void;
  toggleEnd: (end: boolean) => void;
  setReported: (reported: boolean) => void;
  setWiped: (wiped: boolean) => void;
  startGame: () => void;
  endGame: () => void;
  resetState: () => void;
};

export const useScreenContext = () => {
  const [hasStarted, toggleStart] = useState<boolean>(true); // {DEBUG}
  const [hasEnded, toggleEnd] = useState<boolean>(true); // {DEBUG}
  const [reported, setReported] = useState<boolean>(false);
  const [wiped, setWiped] = useState<boolean>(false);

  return {
    screen_state: {
      hasStarted,
      hasEnded,
      reported,
      wiped,
    },
    screen_actions: {
      toggleStart,
      toggleEnd,
      setReported,
      setWiped,
      startGame: () => {
        toggleStart(true);
        toggleEnd(false);
      },
      endGame: () => {
        toggleEnd(true);
      },
      resetState: () => {
        toggleEnd(false);
        toggleStart(false);
      },
    },
  };
};
