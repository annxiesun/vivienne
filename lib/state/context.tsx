import React, { createContext, ReactNode, useContext, useState } from "react";
import { SkypeActions, SkypeState, useSkypeContext } from "./skype_state";

type Props = {
  children: React.ReactNode;
};

type GameState = {
  scene: number;
  showEvidenceModal: boolean;
  evidence: ReactNode;
  skype: SkypeState;
};

type GameActions = {
  setScene: React.Dispatch<React.SetStateAction<number>>;
  setEvidence: (evidence: ReactNode) => void;
  toggleEvidenceModal: (show: boolean) => void;
  skype: SkypeActions;
};

type Context = {
  state: GameState;
  actions: GameActions;
};

const GameContext = createContext<Context | null>(null);

export const GameContextProvider = ({ children }: Props) => {
  // GLOBAL STATE
  const [scene, setScene] = useState(5); // {DEBUG}: we normally set this to 0 but i set it to 5 so we can click all apps on refresh
  const [showEvidenceModal, toggleEvidenceModal] = useState(false);
  const [evidence, setEvidence] = useState<ReactNode>("");

  // APP STATE
  const { skype_state, skype_actions } = useSkypeContext();

  const state = {
    scene,
    evidence,
    showEvidenceModal,
    skype: skype_state,
  };

  const actions = {
    setScene,
    setEvidence,
    toggleEvidenceModal,
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
