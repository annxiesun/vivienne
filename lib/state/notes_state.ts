import { useState } from "react";
import {
  Note,
  initialNotes,
  lockedFolderPassword,
} from "../game/apps/notes/common/constants";

export type NotesState = {
  notes: Note[];
  isPasswordCorrect: boolean;
  password: string;
  selectedNote: Note | null;
  foundNote: boolean; // found Vivienne's suicide note
};

export type NotesActions = {
  setNotes: (notes: Note[]) => void;
  setPassword: (password: string) => void;
  setIsPasswordCorrect: (correct: boolean) => void;
  setFoundNote: (found: boolean) => void;
  selectNote: (note: Note) => void;
  submitPassword: () => void;
  resetState: () => void;
};

export const useNotesContext = () => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [selectedNote, selectNote] = useState<Note | null>(null);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [password, setPassword] = useState("");
  const [foundNote, setFoundNote] = useState(false);

  return {
    notes_state: {
      notes,
      selectedNote,
      password,
      isPasswordCorrect,
      foundNote,
    },
    notes_actions: {
      setNotes,
      setPassword,
      setIsPasswordCorrect,
      selectNote,
      setFoundNote,
      submitPassword: () => {
        if (password === lockedFolderPassword) {
          setIsPasswordCorrect(true);
          setPassword("");
        } else {
          alert("Incorrect password!");
        }
      },
      resetState: () => {
        setNotes(initialNotes);
        selectNote(null);
        setIsPasswordCorrect(false);
        setPassword("");
      },
    },
  };
};
