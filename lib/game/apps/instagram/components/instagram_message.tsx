import { InstagramMessageType } from "../common/types";

type InstagramMessageProps = {
  message: InstagramMessageType;
};

export default function InstagramMessage(props: InstagramMessageProps) {
  const { message } = props;
  const { is_me, value } = message;

  return <div className={`w-fit p-2 rounded-md ${is_me ? "bg-blue-500 self-end text-white" : "bg-gray-100"}`}>{value}</div>;
}
