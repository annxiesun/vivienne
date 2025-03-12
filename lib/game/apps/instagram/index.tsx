import { Tabs } from "radix-ui";
import Profile from "./profile";
import Messages from "./messages";
import Notifications from "./notifications";
import InstagramHome from "./instagram_home";

import { MessageCircle, House, Heart, UserRound } from "lucide-react";
import { useGameActions, useGameState } from "../../../state/context";
import { ME } from "./common/users";
import { InstagramPage } from "../../../state/instagram_state";
import InstagramPost from "./components/instagram_post";

const getTab = (page:InstagramPage) => {
  switch(page) {
    case "home":
      return <InstagramHome/>
    case "notifications":
      return <Notifications />
    case "messages":
      return <Messages />
    case "profile":
      return <Profile />
  }
}

function InstagramContent() {
  const state = useGameState();

  const { currentPage, currentPost } = state.instagram;


  if (currentPost) {
    return <InstagramPost post={currentPost} />
  }

  const tab = getTab(currentPage)
  return tab
}

export default function Instagram() {
  const actions = useGameActions();
  const { goToUser, goToPage } = actions.instagram;
  return (
    <div className="w-full h-full text-black flex-1">
      <Tabs.Root defaultValue="tab1" className="flex flex-row w-full h-full">
        <Tabs.List
          aria-label="tabs example"
          className="flex flex-col items-start p-5 gap-5"
        >
          <div
            className="flex flex-row items-center gap-2"
            onClick={() => goToPage("home")}
          >
            <House />
            Home
          </div>
          <div
            className="flex flex-row items-center gap-2"
            onClick={() => goToPage("notifications")}
          >
            <Heart /> Notifications
          </div>
          <div
            className="flex flex-row items-center gap-2"
            onClick={() => goToPage("messages")}
          >
            <MessageCircle />
            Messages
          </div>
          <div
            className="flex flex-row items-center gap-2"
            onClick={() => {
              goToUser(ME)
            }}
          >
            <UserRound />
            Profile
          </div>
        </Tabs.List>
        <div className="flex-1 overflow-y-scroll overflow-hidden">
            <InstagramContent />
        </div>
      </Tabs.Root>
    </div>
  );
}
