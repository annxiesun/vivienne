import { getAllPosts } from "../lib/utils/api";
import Head from "next/head";
import Home from "../lib/game/home/home";

export default function Index() {
  return (
    <>
        <Head>
          <title>{`Vivienne`}</title>
        </Head>
        <Home />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
