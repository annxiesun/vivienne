import { useState } from "react";
import { InstagramPostType } from "../game/apps/instagram/common/types";

export type InstagramPage =
  | "profile"
  | "post"
  | "home"
  | "notifications"
  | "messages";

export type InstagramState = {
  currentPage: InstagramPage;
  currentPost?: InstagramPostType;
  currentUser?: string;

  prevPage?: InstagramPage;
  prevPost?: InstagramPostType;
  prevUser?: string;
};

export type InstagramActions = {
  goToPost: (post: InstagramPostType) => void;
  goToPage: (page: Omit<InstagramPage, "post" | "profile">) => void;
  goToUser: (username: string) => void;
  goToPrev: () => void;
};

export const useInstagramContext = () => {
  const [currentPost, setPost] = useState(undefined);
  const [currentPage, setPage] = useState<InstagramPage>("home");
  const [currentUser, setUser] = useState<string>(undefined);

  const [prevPage, setPrevPage] = useState<InstagramPage>(undefined);
  const [prevPost, setPrevPost] = useState<InstagramPostType>(undefined);
  const [prevUser, setPrevUser] = useState<string>(undefined);

  return {
    instagram_state: { currentPost, currentPage, currentUser },
    instagram_actions: {
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
        console.log({prevPage, prevUser, prevPost})
        setPage(prevPage);
        setUser(prevUser);
        setPost(prevPost);
        setPrevPage(undefined);
        setPrevUser(undefined);
        setPrevPost(undefined);
      },
    },
  };
};
