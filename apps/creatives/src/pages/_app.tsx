import { Layout } from "@omsimos/ui";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import "@omsimos/ui/styles.css";
import SEO from "../../next-seo-config";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}
