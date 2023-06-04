import Layout from "@/components/layout";
import "@/styles/globals.css";
import { useRouter } from "next/router";

let unLayouted = ["/home", "/overlay"];

function checkStartArray(url) {
  for (let i = 0; i < unLayouted.length; i++) {
    if (url.startsWith(unLayouted[i])) {
      return true;
    }
  }
  return false;
}

export default function App({ Component, pageProps }) {
  const { asPath, pathname } = useRouter();

  if (!checkStartArray(pathname)) {
    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  } else {
    return <Component {...pageProps} />;
  }
}
