import { useState } from "react";
import { Contact } from "../constants";

export type SkypePage = "chat" | "profile";

export type SkypeState = {
  selectedChat: Contact | null;
  viewingProfile: boolean;
  modalMessage: string | null;
  showEvidenceModal: boolean;
  showImageModal: boolean;
};

export type SkypeActions = {
  selectChat: (chat: Contact | null) => void;
  viewProfile: (view: boolean) => void;
  setModalMessage: (message: string | null) => void;
  toggleEvidenceModal: (show: boolean) => void;
  toggleImageModal: (show: boolean) => void;
};

export const useSkypeContext = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [viewingProfile, setViewingProfile] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);

  return {
    skype_state: {
      selectedChat,
      viewingProfile,
      modalMessage,
      showImageModal,
      showEvidenceModal,
    },
    skype_actions: {
      selectChat: (chat: Contact | null) => {
        setSelectedChat(chat);
        setViewingProfile(false);
      },
      viewProfile: (view: boolean) => {
        setViewingProfile(view);
      },
      setModalMessage: (message: string | null) => {
        setModalMessage(message);
      },
      toggleImageModal: (show: boolean) => {
        setShowImageModal(show);
      },
      toggleEvidenceModal: (show: boolean) => {
        setShowEvidenceModal(show);
      },
    },
  };
};
