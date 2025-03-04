import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type GameState = {
  scene: number;
};

type GameActions = {
  setScene: React.Dispatch<React.SetStateAction<number>>;
};

type Context = {
  state: GameState;
  actions: GameActions;
};

const GameContext = createContext<Context | null>(null);

export const GameContextProvider = ({ children }: Props) => {
  const [scene, setScene] = useState(0);

  const state = {
    scene,
  };

  const actions = {
    setScene,
  };
  return (
    <GameContext.Provider value={{ state, actions }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(GameContext);

  if (!context)
    throw new Error(
      "GameContext must be called from within the GameContextProvider"
    );

  return context.state;
};

export const useGameActions = () => {
  const context = useContext(GameContext);

  if (!context)
    throw new Error(
      "GameContext must be called from within the GameContextProvider"
    );

  return context.actions;
};
