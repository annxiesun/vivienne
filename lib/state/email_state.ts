import { useState } from "react";
import {

  initialNotes,
  lockedFolderPassword,
} from "../game/apps/notes/common/constants";
import { Email, initialEmail } from "../game/apps/email/emails";

export type EmailState = {
  emails: Email[];
  gameState: number;
  mailboxState: number;
  currentInbox: number;
  selectedEmail: Email | null;
};

export type EmailActions = {
  setGameState: (state: number) => void;
  setMailboxState: (state: number) => void;
  setCurrentInbox: (inbox: number) => void;
  setSelectedEmail: (email: Email) => void;
  resetState: () => void;
};

export const useEmailContext = () => {
  const [gameState, setGameState] = useState(0)
  const [mailboxState, setMailboxState] = useState(0)
  const [currentInbox, setCurrentInbox] = useState(0)
  const [emails] = useState<Email[]>(initialEmail);
    const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  return {
    email_state: {
      emails,
      gameState,
      mailboxState,
      currentInbox,
      selectedEmail
    },
    email_actions: {
      setGameState,
      setMailboxState,
      setCurrentInbox,
      setSelectedEmail,
      resetState: () => {
        setSelectedEmail(null);
        setGameState(0);
        setMailboxState(0);
        setCurrentInbox(0);
      },
    },
  };
};
