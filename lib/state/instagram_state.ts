import { useState } from "react";
import { InstagramPostType } from "../game/apps/instagram/common/types";
import { INSTAGRAM_CHATS } from "../game/apps/instagram/common/chats";

export type InstagramPage =
  | "profile"
  | "post"
  | "home"
  | "notifications"
  | "messages"
  | "settings";

export type InstagramState = {
  currentPage: InstagramPage;
  currentPost?: InstagramPostType;
  currentUser?: string;

  lastMessagedPerson?: string;

  prevPage?: InstagramPage;
  prevPost?: InstagramPostType;
  prevUser?: string;

  blocked: boolean;
  pageStage: number;
  chatStage: number;
};

export type InstagramActions = {
  goToPost: (post: InstagramPostType) => void;
  goToPage: (page: Omit<InstagramPage, "post" | "profile">) => void;
  goToUser: (username: string) => void;
  goToPrev: () => void;
  unblock: () => void;
  setLastMessagedPerson: (username: string) => void;

  incrementChatStage: () => void;
  incrementPageStage: (stage:number) => void;
};

export const useInstagramContext = () => {
  const [currentPost, setPost] = useState(undefined);
  const [currentPage, setPage] = useState<InstagramPage>("home");
  const [currentUser, setUser] = useState<string>(undefined);
  const [lastMessagedPerson, setLastMessagedPerson] = useState<string>(
    INSTAGRAM_CHATS[0].username
  );

  const [prevPage, setPrevPage] = useState<InstagramPage>(undefined);
  const [prevPost, setPrevPost] = useState<InstagramPostType>(undefined);
  const [prevUser, setPrevUser] = useState<string>(undefined);

  const [blocked, setBlocked] = useState<boolean>(true);
  const [chatStage, setChatStage] = useState<number>(9999); // ANNIE
  const [pageStage, setPageStage] = useState<number>(0);

  return {
    instagram_state: {
      currentPost,
      currentPage,
      currentUser,
      lastMessagedPerson,
      blocked,
      pageStage,
      chatStage,
    },
    instagram_actions: {
      setLastMessagedPerson: (username: string) =>
        setLastMessagedPerson(username),
      goToPost: (post: InstagramPostType) => {
        setPost((prev) => {
          setPrevPost(prev);
          return post;
        });
        setUser((prev) => {
          setPrevUser(prev);
          return undefined;
        });
        setPage((prev) => {
          setPrevPage(prev);
          return "post";
        });
      },
      goToPage: (page: Omit<InstagramPage, "post" | "profile">) => {
        setUser((prev) => {
          setPrevUser(prev);
          return undefined;
        });
        setPost((prev) => {
          setPrevPost(prev);
          return undefined;
        });
        setPage((prev) => {
          setPrevPage(prev);
          return page as InstagramPage;
        });
      },
      goToUser: (username: string) => {
        setUser((prev) => {
          setPrevUser(prev);
          return username;
        });
        setPost((prev) => {
          setPrevPost(prev);
          return undefined;
        });
        setPage((prev) => {
          setPrevPage(prev);
          return "profile";
        });
      },
      goToPrev: () => {
        console.log({ prevPage, prevUser, prevPost });
        setPage(prevPage);
        setUser(prevUser);
        setPost(prevPost);
        setPrevPage(undefined);
        setPrevUser(undefined);
        setPrevPost(undefined);
      },
      unblock: () => {
        setBlocked(false);
      },
      incrementChatStage: () => {
        console.log(chatStage)
        setChatStage(i => i+1)
      },
      incrementPageStage: (stage:number) =>  {
        setPageStage(i =>{
          if (i == stage) return i +1;
          return i
        })
      }
    },
  };
};
