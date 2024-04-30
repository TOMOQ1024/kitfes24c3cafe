import CartItem from "./cartitem";
import styles from "./index.module.scss";

export default function CartMenu () {
  return (
    <div className={styles.container}>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  )
}