import { PROFILE_MAP } from "../common/users";

type InstagramProfilePictureProps = {
  username: string;
  pfp_size?: "sm" | "md";
};

export default function InstagramProfilePicture(
  props: InstagramProfilePictureProps
) {
  const { username, pfp_size } = props;
  return (
    <img
      src={PROFILE_MAP[username].profile_picture}
      className={`rounded-full inline mr-2 ${
        pfp_size == "sm" ? "w-5 h-5" : "w-8 h-8"
      }`}
    />
  );
}
