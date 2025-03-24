import ThoughtButton from "../../../components/thought_button";
import { PROFILE_MAP } from "./common/users";
import InstagramProfilePost from "./components/instagram_profile_post";
import { Separator } from "radix-ui";
import { Lock } from "lucide-react";
import { useGameActions, useGameState } from "../../../state/context";

type InstagramProfileProps = {
  username: string;
};
export default function InstagramProfile(props: InstagramProfileProps) {
  const { username } = props;
  const user = PROFILE_MAP[username];

  console.log({ user });
  if (!user) return null;

  let is_private = false;
  if (user.posts.length == 0) {
    is_private = true;
  }

  const actions = useGameActions();
  const { incrementPageStage } = actions.instagram
  const state = useGameState();
  const { pageStage } = state.instagram

  return (
    <div className="flex w-full justify-center h-0">
      <div className="w-full h-full max-w-[600px] text-black p-2 flex flex-col gap-3 py-3">
        {/* profile */}
        <div className="flex flex-row items-center gap-8 py-5">
          <img src={user.profile_picture} className="w-16 h-16 rounded-full" />
          <div>
            <p>{user.username}</p>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-1">
                <p className="font-bold">{user.posts.length}</p>
                <p className="text-gray-500">{"posts"}</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="font-bold">{user.num_followers}</p>
                <p className="text-gray-500">{"followers"}</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="font-bold">{user.num_following}</p>
                <p className="text-gray-500">{"following"}</p>
              </div>
            </div>
            <p className="mt-2">{user.description}</p>
          </div>
          {user.profile_thought && (
            <ThoughtButton thought={user.profile_thought} onClick={user.stage ? pageStage == user.stage && incrementPageStage : null} />
          )}
        </div>
        <Separator.Root className="w-full h-[1px] bg-gray-400" />
        {/* profile */}
        <div
          className={
            is_private
              ? "flex justify-center"
              : "grid grid-cols-3 gap-2 py-3 pb-10 "
          }
        >
          {is_private ? (
            <div className="flex items-center flex-col border-b-gray-400 border-[1px] border-solid w-[100px] h-[100px] justify-center rounded-full">
              <Lock className="w-10 h-10" />
              {"Private"}
            </div>
          ) : (
            user.posts.map((post, i) => (
              <InstagramProfilePost key={i} post={post} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
