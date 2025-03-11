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
  restartGame: () => void;
};

export const useScreenContext = () => {
  const [hasStarted, setHasStarted] = useState<boolean>(true); // {DEBUG}
  const [hasEnded, setHasEnded] = useState<boolean>(true); // {DEBUG}
  const [reported, setReported] = useState<boolean>(false)
  const [wiped, setWiped] = useState<boolean>(false);

  return {
    screen_state: {
      hasStarted,
      hasEnded,
      reported,
      wiped,
    },
    screen_actions: {
      toggleStart: (start: boolean) => {
        setHasStarted(start);
      },
      toggleEnd: (end: boolean) => {
        setHasEnded(end);
      },
      setReported: (reported: boolean) => {
        setReported(reported);
      },
      setWiped: (wiped: boolean) => {
        setWiped(wiped);
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
