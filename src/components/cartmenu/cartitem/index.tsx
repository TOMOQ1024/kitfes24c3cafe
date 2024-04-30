import styles from "./index.module.scss";

export default function CartItem () {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        にゃんぷっぷー
      </div>
      <div className={styles.price}>
        ¥100
      </div>
    </div>
  );
}