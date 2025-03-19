import { getAllPosts } from "../lib/utils/api";
import Head from "next/head";
import { GameContextProvider } from "../lib/state/context";
import MainScreen from "../lib/game/home";

export default function Index() {
  return (
    <>
      <GameContextProvider>
        <Head>
          <title>{`Vivienne`}</title>
        </Head>
        <MainScreen />
      </GameContextProvider>
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
