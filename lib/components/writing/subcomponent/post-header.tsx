import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className=" max-w-2xl mx-auto">
        <div className="flex justify-between mb-4">
          <Avatar name={author.name} picture={author.picture} />
          <DateFormatter dateString={date} />
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="block md:hidden mb-6">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
