import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layout";

function FirstPost() {
  const router = useRouter();

  useEffect(() => {
    router.push("/posts/first-post/?counter=10", undefined, { shallow: true });
  }, []);

  useEffect(() => {
    alert(router.query.counter);
  }, [router.query.counter]);

  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <meta name="author" content="first blog" />
      </Head>
      <h1>First post</h1>
      <p>Welcome to my blog</p>
    </Layout>
  );
}

export default FirstPost;
