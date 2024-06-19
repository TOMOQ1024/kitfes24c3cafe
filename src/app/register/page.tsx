'use client'

import ItemCard from "@/app/register/components/ItemCard";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import Item from "@/src/Item";
import Container from "@/components/container";
import CartItem from "@/app/register/components/CartItem";

const ny: Item = {
  name: 'にゃんぷっぷー',
  get price() {return Math.floor(Math.random()*1000)},
};

type Mode = 'ORDER' | 'CHECKOUT';

export default function Main() {
  const [mode, setMode] = useState<Mode>('CHECKOUT');
  const [items, setItems] = useState<Item[]>([
    ny, ny, ny, ny, ny, ny, ny, ny, ny, ny, ny, ny, ny, ny, ny, ny
  ]);
  const [cartSum, setCartSum] = useState(0);
  const [cartItems, setCartItems] = useState<Item[]>([]);

  useEffect(() => {
    setCartSum(cartItems.length ? cartItems.map(ci=>ci.price).reduce((a,b)=>a+b) : 0);
  }, [cartItems]);

  return (
    <main className={styles.main}>
      <Container className={styles.cart_menu}>
        <div className={styles.cart_list}>
          {cartItems.length ? cartItems.map((v,i)=>{
            return (
              <CartItem
                key={i}
                name={v.name}
                price={v.price}
                onRemove={()=>setCartItems(ci=>ci.slice(1))}
              />
            );
          }) : <button onClick={()=>setMode('ORDER')}>注文を追加</button>}
        </div>
        <div className={styles.cart_footer}>
          <div className={styles.payment}>
            <div><span>合計：</span><span>¥{cartSum}</span></div>
            {mode==='CHECKOUT' ? <>
              <div><span>支払い：</span><span>¥{10000}</span></div>
              <div><span>お釣り：</span><span>¥{10000 - cartSum}</span></div>
            </> : <></>}
          </div>
          {mode==='ORDER' ? <button onClick={()=>setMode('CHECKOUT')}>会計へ</button> : <></>}
        </div>
      </Container>
      <Container className={styles.item_selector}>
        {items.map((v,i)=>{
          return (
            <ItemCard
              key={i}
              name={v.name}
              price={v.price}
              onClick={()=>setCartItems(ci=>[...ci, v])}
            />
          );
        })}
      </Container>
    </main>
  );
}