import { Heart } from "lucide-react";
import { Carousel } from "antd";
import { Separator } from "radix-ui";
import { InstagramPostType } from "../common/types";
import InstagramComment from "./instagram_comment";
import InstagramUsernameButton from "./instagram_username_button";
import ThoughtButton from "../../../../components/thought_button";

type InstagramHomePostProps = {
  post: InstagramPostType;
  className: string;
};

export default function InstagramHomePost(props: InstagramHomePostProps) {
  const { post, className } = props;

  const {
    username,
    images,
    date,
    description,
    comments,
    number_likes,
    thought,
  } = post;
  return (
    <div
      className={`w-[500px] border-solid border-[1px] border-gray-400 flex flex-col ${className}`}
    >
      <Carousel className="h-[500px] w-[500px]
      
      " arrows dots infinite={false}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="h-[500px] w-full object-cover object-center"
          />
        ))}
      </Carousel>
      <div className="w-full bg-white p-4 h-full relative">
        {thought && (
          <ThoughtButton
            className="w-[30px] h-[30px] absolute left-[450px] top-[-490px] text-white"
            thought={thought}
          />
        )}
        <div className="w-full h-full flex flex-col justify-between py-3 items-start">
          <div className="w-full">
            <div className="flex items-center space-x-3 pb-4">
              <InstagramUsernameButton
                hasPicture
                pfp_size="md"
                username={username}
              />
            </div>

            <Separator.Root className="w-full h-[1px] bg-gray-400" />

            <div className="py-4">
              <InstagramUsernameButton username={username} />
              <span className="text-md text-gray-700 ml-1">{description}</span>
            </div>
            {/* COMMENT SECTION */}
            <div className="flex flex-col gap-3 pb-4">
              {comments.slice(0, 3).map((comment, i) => (
                <InstagramComment key={i} comment={comment} />
              ))}
            </div>
          </div>

          <div className="w-full">
            <Separator.Root className="w-full h-[1px] bg-gray-400" />
            <div className="flex items-center space-x-2 mt-4">
              <Heart className="w-5 h-5 text-gray-700 cursor-pointer" />
              <span className="text-md text-black font-semibold">
                <span className="font-semibold">{`${number_likes} Likes`}</span>
              </span>
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {date.toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
