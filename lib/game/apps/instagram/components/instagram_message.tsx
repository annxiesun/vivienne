import ThoughtButton from "../../../../components/thought_button";
import { useGameActions } from "../../../../state/context";
import { InstagramMessageType } from "../common/types";

type InstagramMessageProps = {
  message: InstagramMessageType;
};

export default function InstagramMessage(props: InstagramMessageProps) {
  const { message } = props;
  const { is_me, value, thought, next_scene } = message;

  const actions = useGameActions()

  const nextScene = () => actions.setScene(2)

  return (
    <div className={`w-full flex gap-2 items-center ${is_me ? "flex-row-reverse self-end" : "flex-row"}`}>
      <div
        className={`w-fit p-2 max-w-[400px] rounded-md leading-[2em] ${
          is_me ? "bg-blue-500 text-white" : "bg-gray-100"
        }`}
      >
        {value}
      </div>
      {thought && <ThoughtButton thought={thought} onClick={next_scene && nextScene} />}
    </div>
  );
}
