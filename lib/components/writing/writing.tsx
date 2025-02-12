import Container from "../layout/container";

import Post from "./interfaces/post";
import WritingItem from "./writing-item";

type WritingProps = {
  posts: Post[];
};

export const Writing = ({ posts }: WritingProps) => {
  return (
    <>
      <div className="w-full bg-shade h-screen overflow-scroll hide-scrollbar">
        <Container className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-1 mt-32">
            Writing
          </h1>
          <div className="flex flex-col gap-10">
            {posts.map((post, i) => (
              <WritingItem key={post.title} post={post} delay={i} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Writing;
