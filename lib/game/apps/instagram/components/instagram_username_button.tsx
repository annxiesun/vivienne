import { useGameActions } from "../../../../state/context";
import InstagramProfilePicture from "./instagram_profile_picture";

type InstagramUsernameButtonProps = {
  username: string;
  hasPicture?: boolean;
  children?: React.ReactNode;
  pfp_size?: "sm" | "md";
  disabled?: boolean;
};

export default function InstagramUsernameButton(
  props: InstagramUsernameButtonProps
) {
  const { username, hasPicture, children, pfp_size, disabled } = props;
  const actions = useGameActions();
  const { goToUser } = actions.instagram;

  const open = () => goToUser(username);
  return disabled ? (
    <div className="inline items-center">
      {hasPicture && (
        <InstagramProfilePicture username={username} pfp_size={pfp_size} />
      )}
      <span className="font-semibold mr-2">{username}</span>
      {children}
    </div>
  ) : (
    <button onClick={open} className="inline items-center">
      {hasPicture && (
        <InstagramProfilePicture username={username} pfp_size={pfp_size} />
      )}
      <span className="font-semibold mr-2">{username}</span>
      {children}
    </button>
  );
}
