import Link from "next/link";

function FirstPost() {
  return (
    <>
      <h1>First post</h1>
      <Link href="/">
        <a>back to home</a>
      </Link>
    </>
  );
}

export default FirstPost;
