import { MouseEventHandler } from "react";
import styles from "./index.module.scss";

export default function CartItem ({ name, price, onRemove }: {
  name: string;
  price: number;
  onRemove: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.price} suppressHydrationWarning>
        ¥{price}
      </div>
      <button onClick={onRemove}>DELETE</button>
    </div>
  );
}