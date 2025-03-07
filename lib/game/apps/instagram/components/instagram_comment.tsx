import { InstagramCommentType } from "../common/types";
import { useGameActions } from "../../../../state/context";
import { PROFILE_MAP } from "../common/users";

type InstagramCommentProps = {
  comment: InstagramCommentType
};

export default function InstagramComment(props: InstagramCommentProps) {
  const { comment } = props;
  const actions = useGameActions();
  const { goToUser } = actions.instagram;

  const open = () => goToUser(comment.username);
  return (
    <button onClick={open} className="flex">
      <img
        src={PROFILE_MAP[comment.username].profile_picture}
        className="w-5 h-5 rounded-full inline mr-2"
      />
      <span className="font-semibold mr-2">{comment.username}</span>
      {comment.text}
    </button>
  );
}
