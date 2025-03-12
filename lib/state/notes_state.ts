import { useState } from "react";
import {
  Note,
  hintNotes,
  initialNotes,
  lockedFolderPassword,
} from "../game/apps/notes/common/constants";

export type NotesState = {
  hintState: number;
  notes: Note[];
  isPasswordCorrect: boolean;
  password: string;
  selectedNote: Note | null;
  foundNote: boolean; // found Vivienne's suicide note
};

export type NotesActions = {
  setHintState: (state: number) => void;
  setNotes: (notes: Note[]) => void;
  setPassword: (password: string) => void;
  setIsPasswordCorrect: (correct: boolean) => void;
  setFoundNote: (found: boolean) => void;
  selectNote: (note: Note) => void;
  createHint: () => void;
  submitPassword: () => void;
  resetState: () => void;
};

export const useNotesContext = () => {
  const [hintState, setHintState] = useState(0);
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [selectedNote, selectNote] = useState<Note | null>(null);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [password, setPassword] = useState("");
  const [foundNote, setFoundNote] = useState(false);

  return {
    notes_state: {
      hintState,
      notes,
      selectedNote,
      password,
      isPasswordCorrect,
      foundNote,
    },
    notes_actions: {
      setHintState,
      setNotes,
      setPassword,
      setIsPasswordCorrect,
      selectNote,
      setFoundNote,
      createHint: () => {
        if (hintState < hintNotes.length) {
          const hintNote = hintNotes[hintState];
          setHintState(hintState + 1);
          setNotes([
            ...notes,
            { ...hintNote, date: new Date().toLocaleDateString() },
          ]);
        }
      },
      submitPassword: () => {
        if (password === lockedFolderPassword) {
          setIsPasswordCorrect(true);
          setPassword("");
        } else {
          alert("Incorrect password!");
        }
      },
      resetState: () => {
        setHintState(0);
        setNotes(initialNotes);
        selectNote(null);
        setIsPasswordCorrect(false);
        setPassword("");
      },
    },
  };
};
