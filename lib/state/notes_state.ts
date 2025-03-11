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
};

export const useNotesContext = () => {
  const [hintState, setHintState] = useState(0);
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [foundNote, setFoundNote] = useState(false);

  return {
    notes_state: {
      hintState,
      notes,
      selectedNote,
      passwordInput,
      isPasswordCorrect,
      foundNote,
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
      selectNote: (note: Note) => {
        setSelectedNote(note);
      },
      setIsPasswordCorrect: (correct: boolean) => {
        setIsPasswordCorrect(correct);
      },
      setFoundNote: (found: boolean) => {
        setFoundNote(found);
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
    },
  };
};
