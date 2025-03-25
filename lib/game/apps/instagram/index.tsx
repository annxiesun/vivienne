import { Tabs } from "radix-ui";
import Profile from "./profile";
import Messages from "./messages";
import Notifications from "./notifications";
import InstagramHome from "./instagram_home";

import { MessageCircle, House, UserRound, Settings as SettingsIcon } from "lucide-react";
import { useGameActions, useGameState } from "../../../state/context";
import { ME } from "./common/users";
import { InstagramPage } from "../../../state/instagram_state";
import InstagramPost from "./components/instagram_post";
import Settings from "./settings";

const getTab = (page:InstagramPage) => {
  console.log("switching")
  switch(page) {
    case "home":
      return <InstagramHome/>
    case "notifications":
      return <Notifications />
    case "messages":
      return <Messages />
    case "settings":
      return <Settings />
  }
}

function InstagramContent() {
  const state = useGameState();

  const { currentPage, currentPost, currentUser } = state.instagram;

  console.log("currentUser", currentUser)
  if (currentPost) {
    return <InstagramPost post={currentPost} />
  }

  if (currentUser) {
    return <Profile username={currentUser} />
  }

  const tab = getTab(currentPage)
  return tab
}

const getClasses = (curr, this_stage) => {
  return `flex flex-row items-center gap-2 py-3 px-5 w-full ${curr < this_stage && "bg-gray-200"}`
}

export default function Instagram() {
  const actions = useGameActions();
  const state = useGameState();

  const { goToUser, goToPage } = actions.instagram;
  
  const { pageStage }= state.instagram

  return (
    <div className="w-full h-0 text-black flex-1">
      <Tabs.Root defaultValue="tab1" className="flex flex-row w-full h-full">
        <Tabs.List
          aria-label="tabs example"
          className="flex flex-col items-start w-[200px] box-border pt-2"
        >
          <div className="fixed">
          <div
            className={getClasses(pageStage, 0)}
            onClick={pageStage < 0 ? null : () => goToPage("home")}
          >
            <House />
            Home
          </div>
          <div
              className={getClasses(pageStage, 1)}
            onClick={pageStage < 1 ? null : () => {
              goToUser(ME)
            }}
          >
            <UserRound />
            Profile
          </div>
          {/* <div
            className="flex flex-row items-center gap-2"
            onClick={() => goToPage("notifications")}
          >
            <Heart /> Notifications
          </div> */}
          <div
            className={getClasses(pageStage, 2)}
            onClick={pageStage < 2 ? null :() => goToPage("messages")}
          >
            <MessageCircle />
            Messages
          </div>
          <div
            className={getClasses(pageStage, 3)}
            onClick={pageStage < 3 ? null : () => {
             goToPage("settings")
            }}
          >
            <SettingsIcon/>
            Settings
          </div>
          </div>
        </Tabs.List>
        <div className="h-fit flex-1 overflow-hidden border-l-2 border-l-gray-200">
            <InstagramContent />
        </div>
      </Tabs.Root>
    </div>
  );
}
