import React, { createContext, useContext, useState } from "react";
import { SkypeActions, SkypeState, useSkypeContext } from "./skype_state";

type Props = {
  children: React.ReactNode;
};

type GameState = {
  scene: number;
  skype: SkypeState;
};

type GameActions = {
  setScene: React.Dispatch<React.SetStateAction<number>>;
  skype: SkypeActions;
};

type Context = {
  state: GameState;
  actions: GameActions;
};

const GameContext = createContext<Context | null>(null);

export const GameContextProvider = ({ children }: Props) => {
  const [scene, setScene] = useState(5);
  const { skype_state, skype_actions } = useSkypeContext();

  const state = {
    scene,
    skype: skype_state,
  };

  const actions = {
    setScene,
    skype: skype_actions,
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
