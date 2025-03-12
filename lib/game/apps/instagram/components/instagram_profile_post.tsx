import { InstagramPostObject } from "../common/types";
import { useGameActions } from "../../../../state/context";

type InstagramProfilePostProps = {
  post: InstagramPostObject;
};

export default function InstagramProfilePost(props: InstagramProfilePostProps) {
  const { post } = props;
  const actions = useGameActions();
  const { goToPost } = actions.instagram;

  const { images } = post;

  const open = () => goToPost(post);
  return (
    <button onClick={open}>
      <img src={images[0]} />
    </button>
  );
}
