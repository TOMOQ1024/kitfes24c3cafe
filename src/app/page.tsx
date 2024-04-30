import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href='register'>レジ用ページ</Link>
      <Link href='items'>商品管理ページ</Link>
      <Link href='analytics'>データ分析</Link>
      <Link href='analytics'>伝票がぴょこって出るやつ</Link>
    </main>
  );
}
