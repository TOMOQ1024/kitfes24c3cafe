import Image from "next/image";
import styles from "./index.module.scss";

export default function ItemCard ({name, price}: {
  name: string;
  price: number;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src='/nyanpuppu.png' alt="nyanpuppu" width={200} height={200}></Image>
      </div>
      <div className={styles.detail}>
        <div className={styles.name}>
          {name}
        </div>
        <div className={styles.price}>
          ¥{price}
        </div>
      </div>
    </div>
  )
}