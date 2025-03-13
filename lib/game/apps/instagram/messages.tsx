import { Tabs } from "radix-ui";
import InstagramChat from "./components/instagram_chat";

import { INSTAGRAM_CHATS } from "./common/chats";
import InstagramProfilePicture from "./components/instagram_profile_picture";
import { useCallback, useState } from "react";

export default function Messages() {
  const [selected, setSelected] = useState(INSTAGRAM_CHATS[0].username);

  return (
    <div className="w-full h-full">
      <Tabs.Root
        defaultValue={INSTAGRAM_CHATS[0].username}
        className="flex flex-row h-full relative"
      >
        <Tabs.List className="h-full flex flex-col w-[200px] gap-8 items-start border-r-2 border-r-gray-200 fixed">
          <div className="font-semibold text-[24px] p-4 pb-0">Messages</div>
          {INSTAGRAM_CHATS.map((chat, i) => (
            <Tabs.Trigger
              onClick={useCallback(() => setSelected(chat.username), [])}
              key={i}
              value={chat.username}
              className={`p-4 w-full flex justify-start items-center ${
                selected == chat.username ? "bg-gray-100" : "bg-white"
              }`}
            >
              <InstagramProfilePicture username={chat.username} pfp_size="md" />
              {chat.username}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className="w-[200px]"/>
        <div className="flex-1 w-full">
          {INSTAGRAM_CHATS.map((chat, i) => (
            <Tabs.Content key={i} value={chat.username}>
              <InstagramChat chat={chat} />
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
}
