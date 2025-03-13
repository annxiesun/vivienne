
import { InstagramChatType } from "../common/types";
import InstagramMessage from "./instagram_message";

type InstagramChatProps = {
  chat: InstagramChatType;
};

export default function InstagramChat(props: InstagramChatProps) {
  const { messages } = props.chat;
  return (
    <div className="flex flex-col gap-4 p-4">
      {messages.map((message, i) => (
        <InstagramMessage key={i} message={message} />
      ))}
    </div>
  );
}
