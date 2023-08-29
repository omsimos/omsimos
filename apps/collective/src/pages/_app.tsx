import type { AppProps } from "next/app";
import { Layout } from "@omsimos/ui";
import "@omsimos/ui/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
