'use client'
import CartMenu from "@/components/cartmenu";
import ItemCard from "@/components/itemcard";
import styles from "./page.module.scss";
import { useState } from "react";
import Item from "@/src/Item";

const ny: Item = {
  name: 'にゃんぷっぷー',
  price: 100,
};

export default function Main() {
  const [items, setItems] = useState<Item[]>([
    ny, ny, ny, ny, ny, ny, ny, ny, ny, ny, ny, ny, ny, ny, ny, ny
  ]);

  return (
    <main className={styles.main}>
      <CartMenu />
      <div className={styles.item_container}>
        {items.map((v,i)=>{
          return (
            <ItemCard
              key={i}
              name={v.name}
              price={v.price}
            />
          );
        })}
      </div>
    </main>
  );
}