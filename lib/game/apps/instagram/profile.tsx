import InstagramProfilePost from "./components/instagram_profile_post";
import { Separator } from "radix-ui";
import { VIVIENNE_POSTS } from "./common/posts";


export default function Profile() {

  return (
    <div className="flex w-full justify-center h-0">
      <div className="w-full h-full max-w-[600px] text-black p-2 flex flex-col gap-3 py-3">
        {/* profile */}
        <div className="flex flex-row items-center gap-3 py-5">
          <img
            src="https://i.pravatar.cc/150?img=5"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p>vivienne22023</p>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
          </div>
        </div>
        <Separator.Root className="w-full h-[1px] bg-gray-400" />
        {/* profile */}
        <div className="grid grid-cols-3 gap-2 py-3 pb-10">
          {VIVIENNE_POSTS.map((post, i) => (
            <InstagramProfilePost key={i} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
