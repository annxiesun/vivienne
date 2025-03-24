
import { InstagramChatType } from "../common/types";
import InstagramMessage from "./instagram_message";
import { Separator } from "radix-ui";
import InstagramUsernameButton from "./instagram_username_button";

type InstagramChatProps = {
  chat: InstagramChatType;
};

export default function InstagramChat(props: InstagramChatProps) {
  const { username, messages } = props.chat;
  return (
    <div className="flex flex-col gap-4 p-4">
      <div><InstagramUsernameButton username={username} hasPicture/></div>
       <Separator.Root className="w-full h-[1px] bg-gray-400" />
      {messages.map((message, i) => (
        <InstagramMessage key={i} message={message} />
      ))}
    </div>
  );
}
