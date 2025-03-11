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
  passwordInput: string;
  selectedNote: Note | null;
};

export type NotesActions = {
  setHintState: (state: number) => void;
  setNotes: (notes: Note[]) => void;
  setPassword: (password: string) => void;
  setIsPasswordCorrect:(correct: boolean) => void;
  selectNote: (note: Note) => void;
  createHint: () => void;
  submitPassword: () => void;
  resetState: () => void;
};

export const useNotesContext = () => {
  const [hintState, setHintState] = useState(0);
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [passwordInput, setPasswordInput] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  return {
    notes_state: {
      hintState,
      notes,
      selectedNote,
      passwordInput,
      isPasswordCorrect,
    },
    notes_actions: {
      setHintState: (state: number) => {
        setHintState(state);
      },
      setNotes: (notes: Note[]) => {
        setNotes(notes);
      },
      setPassword: (password: string) => {
        setPasswordInput(password);
      },
      setIsPasswordCorrect,
      selectNote: (note: Note) => {
        setSelectedNote(note);
      },

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
        if (passwordInput === lockedFolderPassword) {
          setIsPasswordCorrect(true);
          setPasswordInput("");
        } else {
          alert("Incorrect password!");
        }
      },
      resetState: () => {
        setHintState(0);
        setNotes(initialNotes);
        setSelectedNote(null);
        setIsPasswordCorrect(false);
        setPasswordInput("");
      },
    },
  };
};
