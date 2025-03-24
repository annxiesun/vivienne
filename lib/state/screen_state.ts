import { useState } from "react";

export type ScreenState = {
  defaultEnd: boolean;
  hasStarted: boolean;
  hasEnded: boolean;
  reported: boolean;
  wiped: boolean;
};

export type ScreenActions = {
  toggleStart: (start: boolean) => void;
  toggleDefaultEnd: (end: boolean) => void;
  toggleEnd: (end: boolean) => void;
  setReported: (reported: boolean) => void;
  setWiped: (wiped: boolean) => void;
  startGame: () => void;
  endGame: () => void;
  resetState: () => void;
};

export const useScreenContext = () => {
  const [defaultEnd, toggleDefaultEnd] = useState<boolean>(true); 
  const [hasStarted, toggleStart] = useState<boolean>(false); // {DEBUG}
  const [hasEnded, toggleEnd] = useState<boolean>(false); // {DEBUG}
  const [reported, setReported] = useState<boolean>(false);
  const [wiped, setWiped] = useState<boolean>(false);

  return {
    screen_state: {
      defaultEnd,
      hasStarted,
      hasEnded,
      reported,
      wiped,
    },
    screen_actions: {
      toggleDefaultEnd,
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
