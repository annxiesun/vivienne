import { useState } from "react";
import {
  InstagramPostObject,
  InstagramUser,
} from "../game/apps/instagram/common/types";

export type InstagramPage =
  | "profile"
  | "post"
  | "home"
  | "notifications"
  | "messages";

export type InstagramState = {
  currentPage: InstagramPage;
  currentPost?: InstagramPostObject;
  currentUser?: string;
  prevPage?: InstagramPage
};

export type InstagramActions = {
  goToPost: (post: InstagramPostObject) => void;
  goToPage: (page: Omit<InstagramPage, "post" | "profile">) => void;
  goToUser: (user: InstagramUser) => void;
  goToPrev: () => void
};

export const useInstagramContext = () => {
  const [currentPost, setPost] = useState(undefined);
  const [currentPage, setPage] = useState<InstagramPage>("home");
  const [prevPage, setPrevPage] = useState<InstagramPage>(undefined);
  const [currentUser, setUser] = useState(undefined);

  return {
    instagram_state: { currentPost, currentPage, currentUser },
    instagram_actions: {
      goToPost: (post: InstagramPostObject) => {
        setUser(undefined);
        setPost(post);
        setPage((prev) => {
          setPrevPage(prev)
          return "post"}
        );
      },
      goToPage: (page: Omit<InstagramPage, "post" | "profile">) => {
        setUser(undefined);
        setPost(undefined);
        setPage((prev) => {
          setPrevPage(prev)
          console.log("prev", prev)
          return page as InstagramPage}
        );
      },
      goToUser: (user: InstagramUser) => {
        setUser(user);
        setPost(undefined);
        setPage((prev) => {
          setPrevPage(prev)
          return "profile"}
        );
      },
      goToPrev: () => {
        setPage(prevPage)
        setPrevPage(undefined)
        setUser(undefined);
        setPost(undefined);
      }
    },
  };
};
