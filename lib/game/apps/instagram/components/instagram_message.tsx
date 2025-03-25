import ThoughtButton from "../../../../components/thought_button";
import { InstagramMessageType } from "../common/types";

type InstagramMessageProps = {
  message: InstagramMessageType;
};

export default function InstagramMessage(props: InstagramMessageProps) {
  const { message } = props;
  const { is_me, value, thought } = message;

  return (
    <div className={`w-full flex gap-2 items-center ${is_me ? "flex-row-reverse self-end" : "flex-row"}`}>
      <div
        className={`w-fit p-2 max-w-[400px] rounded-md leading-[2em] ${
          is_me ? "bg-blue-500 text-white" : "bg-gray-100"
        }`}
      >
        {value}
      </div>
      {thought && <ThoughtButton thought={thought} />}
    </div>
  );
}
