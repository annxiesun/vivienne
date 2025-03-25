import { InstagramPostType } from "../common/types";
import { useGameActions } from "../../../../state/context";

type InstagramProfilePostProps = {
  post: InstagramPostType;
};

export default function InstagramProfilePost(props: InstagramProfilePostProps) {
  const { post } = props;
  const actions = useGameActions();
  const { goToPost } = actions.instagram;

  const { images } = post;

  const open = () => goToPost(post);
  return (
    <button onClick={open}>
      <img src={images[0]} className="h-[220px] w-[220px] object-cover object-center" />
    </button>
  );
}
