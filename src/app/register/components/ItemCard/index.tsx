import { MouseEventHandler } from "react";
import styles from "./index.module.scss";

export default function ItemCard ({ name, price, onClick }: {
  name: string;
  price: number;
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.price} suppressHydrationWarning>
        ¥{price}
      </div>
    </div>
  )
}