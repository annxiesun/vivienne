import { Heart, X } from "lucide-react";
import { Carousel } from "antd";
import { Separator } from "radix-ui";
import { InstagramPostObject } from "../common/types";
import { PROFILE_MAP } from "../common/users";
import { useGameActions } from "../../../../state/context";

type InstagramPostProps = {
  post: InstagramPostObject;
};

export default function InstagramPost(props: InstagramPostProps) {
  const { post } = props;

  const actions = useGameActions();
  const { goToPrev } = actions.instagram;

  const { username, images, date, description, comments, number_likes } = post;
  return (
    <div className="w-full h-full relative">
      <button onClick={goToPrev} className="absolute right-5 top-5">
        <X />
      </button>
      <div className="flex px-2 py-4 items-center h-full justify-center">
        <div className="h-[500px] border-solid border-[1px] border-gray-400 flex flex-row">
          <Carousel
            className="h-[500px] w-[500px]"
            arrows
            dots
            infinite={false}
          >
            {images.map((img, i) => (
              <img key={i} src={img} className="h-full w-full" />
            ))}
          </Carousel>
          <div className="w-full bg-white p-4 h-full">
            <div className="w-full h-full flex flex-col justify-between py-3 items-start">
              <div className="w-full">
                <div className="flex items-center space-x-3 pb-4">
                  <img
                    src={PROFILE_MAP[username]}
                    className="w-10 h-10 rounded-full"
                    alt="User Avatar"
                  />
                  <div className="font-semibold text-md">{username}</div>
                </div>

                <Separator.Root className="w-full h-[1px] bg-gray-400" />

                <div className="py-4">
                  <span className="font-[600] text-md">{username}</span>
                  <span className="text-md text-gray-700 ml-1">
                    {description}
                  </span>
                </div>
                {/* COMMENT SECTION */}
                <div className="flex flex-col gap-3">
                  {comments.map((comment, i) => (
                    <div key={i}>
                      <img
                        src={PROFILE_MAP[comment.username]}
                        className="w-5 h-5 rounded-full inline mr-2"
                      />
                      <span className="font-semibold mr-2">
                        {comment.username}
                      </span>
                      {comment.text}
                    </div>
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
      </div>
    </div>
  );
}
