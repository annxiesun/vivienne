import { useState } from "react";
import { getAllPosts } from "../lib/utils/api";
import Head from "next/head";
import Home from "../lib/game/home/home";
import StartScreen from "../lib/game/home/start";

export default function Index({ allPosts }: { allPosts: any[] }) {
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const startGame = () => {
    setHasStarted(true); 
  };

  return (
    <>
      <Head>
        <title>{`Vivienne`}</title>
      </Head>
      {!hasStarted ? <StartScreen onStart={startGame} /> : <Home />}
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
