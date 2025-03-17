import { VIVIENNE_POSTS } from "./common/posts";
import InstagramHomePost from "./components/instagram_home_post";

export default function InstagramHome() {
  return (
    <div className="w-full h-full text-black flex items-center p-5 mb-5 justify-center">
      <div className="h-full">
        {VIVIENNE_POSTS.map((post, i) => (
          <InstagramHomePost key={i} post={post} className="mb-8" />
        ))}
        <div className="h-[50px]"/> {/** SCROLL FOOTER **/}
      </div>
    </div>
  );
}
