import { PROFILE_MAP } from "./common/users";
import InstagramProfilePost from "./components/instagram_profile_post";
import { Separator } from "radix-ui";

type InstagramProfileProps = {
  username: string;
};
export default function InstagramProfile(props: InstagramProfileProps) {
  const { username } = props;
  const user = PROFILE_MAP[username];

  if (!user) return null;

  return (
    <div className="flex w-full justify-center h-0">
      <div className="w-full h-full max-w-[600px] text-black p-2 flex flex-col gap-3 py-3">
        {/* profile */}
        <div className="flex flex-row items-center gap-3 py-5">
          <img src={user.profile_picture} className="w-12 h-12 rounded-full" />
          <div>
            <p>{user.username}</p>
            <p>{user.description}</p>
            <p>{user.num_followers}</p>
            <p>{user.num_following}</p>
          </div>
        </div>
        <Separator.Root className="w-full h-[1px] bg-gray-400" />
        {/* profile */}
        <div className="grid grid-cols-3 gap-2 py-3 pb-10">
          {user.posts.map((post, i) => (
            <InstagramProfilePost key={i} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
