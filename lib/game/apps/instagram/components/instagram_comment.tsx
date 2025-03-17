import { InstagramCommentType } from "../common/types";
import InstagramUsernameButton from "./instagram_username_button";

type InstagramCommentProps = {
  comment: InstagramCommentType;
};

export default function InstagramComment(props: InstagramCommentProps) {
  const { comment } = props;

  return (
    <div><InstagramUsernameButton username={comment.username} hasPicture pfp_size="sm"/>
    {comment.text}</div>
  );
}
