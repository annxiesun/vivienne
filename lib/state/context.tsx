import React, { createContext, ReactNode, useContext, useState } from "react";
import { SkypeActions, SkypeState, useSkypeContext } from "./skype_state";
import { Decision } from "../constants";

type Props = {
  children: React.ReactNode;
};

type GameState = {
  scene: number;
  showModal: boolean;
  modalType: "thought" | "decision";
  thought: ReactNode;
  decision: Decision;
  skype: SkypeState;
};

type GameActions = {
  setScene: React.Dispatch<React.SetStateAction<number>>;
  setThought: (thought: string) => void;
  setDecision: (decision: Decision) => void;
  setModalType: (type: "thought" | "decision") => void;
  toggleModal: (show: boolean) => void;
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
  const [showModal, toggleModal] = useState(false);
  const [thought, setThought] = useState("");
  const [decision, setDecision] = useState<Decision>({
    question: "?",
    info: "?",
    option1: "?",
    onClick1: () => console.log("chose option 1"),
    option2: "?",
    onClick2: () => toggleModal(false),
  });
  const [modalType, setModalType] = useState<"thought" | "decision">("thought");

  // APP STATE
  const { skype_state, skype_actions } = useSkypeContext();

  const state = {
    scene,
    thought,
    decision,
    showModal,
    modalType,
    skype: skype_state,
  };

  const actions = {
    setScene,
    setThought,
    setDecision,
    toggleModal,
    setModalType,
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
