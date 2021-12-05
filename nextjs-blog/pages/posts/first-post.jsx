import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

function FirstPost() {
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
