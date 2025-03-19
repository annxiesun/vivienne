import { useState } from "react";
import { Contact } from "../game/apps/skype/common/constants";

export type SkypePage = "chat" | "profile";

export type SkypeState = {
  selectedChat: Contact | null;
  viewingProfile: boolean;
  modalMessage: string | null;
  showImageModal: boolean;
  viewedChats: string[]; 
  viewedEvidence: string[]; 
};

export type SkypeActions = {
  selectChat: (chat: Contact | null) => void;
  viewProfile: (view: boolean) => void;
  setModalMessage: (message: string | null) => void;
  toggleImageModal: (show: boolean) => void;
  markChatAsViewed: (chatName: string) => void; // Mark a chat as viewed
  markEvidenceAsViewed: (chatName: string) => void; // Mark all evidence as viewed
  resetState: () => void;
};

export const useSkypeContext = () => {
  const [selectedChat, selectChat] = useState<Contact | null>(null);
  const [viewingProfile, viewProfile] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [showImageModal, toggleImageModal] = useState(false);
  const [viewedChats, setViewedChats] = useState<string[]>([]);
  const [viewedEvidence, setEvidenceViewed] = useState<string[]>([]);

  return {
    skype_state: {
      selectedChat,
      viewingProfile,
      modalMessage,
      showImageModal,
      viewedChats,
      viewedEvidence,
    },
    skype_actions: {
      selectChat,
      viewProfile,
      setModalMessage,
      toggleImageModal,
      markChatAsViewed: (chatName) => {
        setViewedChats((prev) =>
          prev.includes(chatName) ? prev : [...prev, chatName]
        );
      },
      markEvidenceAsViewed: (chatName) => {
        setEvidenceViewed((prev) =>
          prev.includes(chatName) ? prev : [...prev, chatName]
        );
      },
      resetState: () => {
        selectChat(null);
        viewProfile(false);
        setModalMessage(null);
        toggleImageModal(false);
        setViewedChats([]);
        setEvidenceViewed([]);
      },
    },
  };
};
