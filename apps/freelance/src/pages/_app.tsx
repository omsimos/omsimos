import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <h1>hello</h1>
      <Component {...pageProps} />;
    </div>
  );
}
