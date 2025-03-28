import React, { createContext, ReactNode, useContext, useState } from "react";
import { SkypeActions, SkypeState, useSkypeContext } from "./skype_state";
import { ScreenActions, ScreenState, useScreenContext } from "./screen_state";
import { NotesState, NotesActions, useNotesContext } from "./notes_state";
import { Decision } from "../constants";
import {
  InstagramActions,
  InstagramState,
  useInstagramContext,
} from "./instagram_state";

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
  screen: ScreenState;
  notes: NotesState;
  instagram: InstagramState;
};

type GameActions = {
  setScene: React.Dispatch<React.SetStateAction<number>>;
  setThought: (thought: string) => void;
  setDecision: (decision: Decision) => void;
  setModalType: (type: "thought" | "decision") => void;
  toggleModal: (show: boolean) => void;
  restartGame: () => void;
  skype: SkypeActions;
  screen: ScreenActions;
  notes: NotesActions;
  instagram: InstagramActions;
};

type Context = {
  state: GameState;
  actions: GameActions;
};

const GameContext = createContext<Context | null>(null);

export const GameContextProvider = ({ children }: Props) => {
  // GLOBAL STATE
  const [scene, setScene] = useState(1); // {DEBUG}: we normally set this to 0 but i set it to 5 so we can click all apps on refresh
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

  // SCREEN STATE
  const { screen_state, screen_actions } = useScreenContext();

  // APP STATE
  const { skype_state, skype_actions } = useSkypeContext();
  const { notes_state, notes_actions } = useNotesContext();
  const { instagram_state, instagram_actions } = useInstagramContext();

  const state = {
    scene,
    thought,
    decision,
    showModal,
    modalType,
    skype: skype_state,
    screen: screen_state,
    notes: notes_state,
    instagram: instagram_state,
  };

  const actions = {
    setScene: (i: number) =>
      setScene((prev) => {
        if (prev == i - 1) {
          console.log("scene set", i)
          return i;
        }
      }),
    setThought,
    setDecision,
    toggleModal,
    setModalType,
    restartGame: () => {
      screen_actions.resetState();
      skype_actions.resetState();
      notes_actions.resetState();
      toggleModal(false);
      setThought("");
    },
    skype: skype_actions,
    screen: screen_actions,
    notes: notes_actions,
    instagram: instagram_actions,
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
