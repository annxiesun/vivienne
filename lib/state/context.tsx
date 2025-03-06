import React, { createContext, useContext, useState } from "react";
import { NotesState, NotesActions, useNotesContext } from "./notes_state";

type Props = {
  children: React.ReactNode;
};

type GameState = {
  scene: number;
  notes: NotesState;
};

type GameActions = {
  setScene: React.Dispatch<React.SetStateAction<number>>;
  notes: NotesActions;
};

type Context = {
  state: GameState;
  actions: GameActions;
};

const GameContext = createContext<Context | null>(null);

export const GameContextProvider = ({ children }: Props) => {
  const [scene, setScene] = useState(0);
  const { notes_state, notes_actions } = useNotesContext();

  const state = {
    scene,
    notes: notes_state,
  };

  const actions = {
    setScene,
    notes: notes_actions,
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
