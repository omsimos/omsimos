import type { AppProps } from "next/app";
import { Layout } from "ui";
import "ui/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
