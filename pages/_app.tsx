import Layout from "@/components/Layout";
import { GlobalStyles } from "@/styles/globals";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return <Layout>
    <GlobalStyles/>
    <Component {...pageProps} />
    </Layout>
}
