import { Tabs } from "radix-ui";
import InstagramChat from "./components/instagram_chat";

import { INSTAGRAM_CHATS } from "./common/chats";
import InstagramProfilePicture from "./components/instagram_profile_picture";
import { useCallback } from "react";
import { useGameActions, useGameState } from "../../../state/context";
import { Lock } from "lucide-react";

export default function Messages() {
  // const [selected, setSelected] = useState(INSTAGRAM_CHATS[0].username);

  const state = useGameState();
  const { lastMessagedPerson, blocked, chatStage } = state.instagram;

  const actions = useGameActions();
  const { setLastMessagedPerson, incrementChatStage } = actions.instagram;

  return (
    <div className="w-full h-full">
      <Tabs.Root
        defaultValue={lastMessagedPerson}
        className="flex flex-row h-full relative"
      >
        <Tabs.List className="h-full flex flex-col w-[300px] gap-8 items-start border-r-2 border-r-gray-200 fixed">
          <div className="font-semibold text-[24px] p-4 pb-0">Messages</div>
          {INSTAGRAM_CHATS.filter(
            (chat) =>
              (chat.unlocked_after_unblock && !blocked) ||
              !chat.unlocked_after_unblock
          ).map((chat, i) => (
            <Tabs.Trigger
              disabled={chat.stage > chatStage}
              onClick={useCallback(() => {
                console.log("jisjdisjd", chatStage, chat.stage);
                if (chat.stage == chatStage) incrementChatStage();
                setLastMessagedPerson(chat.username);
              }, [chatStage])}
              key={i}
              value={chat.username}
              className={`p-4 w-full flex justify-start items-center ${
                lastMessagedPerson == chat.username ? "bg-gray-100" : "bg-white"
              }`}
            >
              <InstagramProfilePicture username={chat.username} pfp_size="md" />
              {chat.username}
              {chat.stage > chatStage && <Lock className="ml-4" />}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className="w-[300px]" />
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
