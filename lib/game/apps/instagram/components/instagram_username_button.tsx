
import { useGameActions } from "../../../../state/context";
import { PROFILE_MAP } from "../common/users";

type InstagramUsernameButtonProps = {
  username: string
  hasPicture?: boolean
  children?: React.ReactNode
  pfp_size?: "sm" | "md"
};

export default function InstagramUsernameButton(props: InstagramUsernameButtonProps) {
  const { username, hasPicture, children, pfp_size } = props;
  const actions = useGameActions();
  const { goToUser } = actions.instagram;

  const open = () => goToUser(username);
  return (
    <button onClick={open} className="inline items-center">
      {hasPicture && <img
        src={PROFILE_MAP[username].profile_picture}
        className={`rounded-full inline mr-2 ${pfp_size == "sm" ? "w-5 h-5" : "w-8 h-8"}`}
      />}
      <span className="font-semibold mr-2">{username}</span>
      {children}
    </button>
  );
}
