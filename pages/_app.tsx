import { AppProps } from "next/app";
import "../styles/index.css";
import "react-loading-skeleton/dist/skeleton.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
