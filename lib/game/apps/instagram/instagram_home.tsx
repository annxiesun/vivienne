import ThoughtButton from "../../../components/thought_button";
import { useGameActions } from "../../../state/context";
import { HOME_POSTS } from "./common/posts";
import InstagramHomePost from "./components/instagram_home_post";

export default function InstagramHome() {
  const actions = useGameActions() 

  const { incrementPageStage } = actions.instagram

  const handleClick = () => {
      incrementPageStage(0);
  };

  return (
    <div className="w-full h-full text-black flex items-center p-5 mb-5 justify-center">
      <div className="h-full">
        {HOME_POSTS.map((post, i) => (
          <InstagramHomePost key={i} post={post} className="mb-8" />
        ))}
        <div className="flex flex-col items-center"><ThoughtButton className="w-[30px] h-[30px]" onClick={handleClick} thought="Wow, this girl sure follows a lot of beauty accounts."/></div>
        <div className="h-[50px]"/> {/** SCROLL FOOTER **/}
      </div>
    </div>
  );
}
