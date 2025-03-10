import { useState } from "react";
import { getAllPosts } from "../lib/utils/api";
import Head from "next/head";
import Home from "../lib/game/home/home";
import StartScreen from "../lib/game/home/start";
import { GameContextProvider } from "../lib/state/context";

export default function Index() {
  const [hasStarted, setHasStarted] = useState<boolean>(true); // {DEBUG} (skip intro when developing)

  const startGame = () => {
    setHasStarted(true);
  };

  return (
    <>
      <GameContextProvider>
        <Head>
          <title>{`Vivienne`}</title>
        </Head>
        {!hasStarted ? <StartScreen onStart={startGame} /> : <Home />}
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
