import Script from "next/script";
import styles from "../styles/Home.module.css";

export default function Home() {
  console.log("환경 변수: ", process.env.NEXT_PUBLIC_ENV_KEY);

  return (
    <>
      <Script src="/__ENV.js" />
      <div className={styles.container}>env test</div>
    </>
  );
}
