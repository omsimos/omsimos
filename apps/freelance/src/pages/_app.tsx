import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Layout } from "ui";

import "ui/styles.css";
import SEO from "../../next-seo-config";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}
