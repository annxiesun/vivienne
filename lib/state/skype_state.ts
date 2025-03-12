import { useState } from "react";
import { Contact } from "../game/apps/skype/common/constants";

export type SkypePage = "chat" | "profile";

export type SkypeState = {
  selectedChat: Contact | null;
  viewingProfile: boolean;
  modalMessage: string | null;
  showImageModal: boolean;
};

export type SkypeActions = {
  selectChat: (chat: Contact | null) => void;
  viewProfile: (view: boolean) => void;
  setModalMessage: (message: string | null) => void;
  toggleImageModal: (show: boolean) => void;
  resetState: () => void;
};

export const useSkypeContext = () => {
  const [selectedChat, selectChat] = useState(null);
  const [viewingProfile, viewProfile] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [showImageModal, toggleImageModal] = useState(false);

  return {
    skype_state: {
      selectedChat,
      viewingProfile,
      modalMessage,
      showImageModal,
    },
    skype_actions: {
      selectChat,
      viewProfile,
      setModalMessage,
      toggleImageModal,
      resetState: () => {
        selectChat(null);
        viewProfile(false);
        setModalMessage(null);
        toggleImageModal(false);
      },
    },
  };
};
