'use client'

import Price from "@/components/price";
import styles from "./page.module.scss";
import Link from "next/link";
import ReactModal from 'react-modal'
import { useState } from "react";
import Image from "next/image";

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalStyle: ReactModal.Styles = {
    content: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      padding: 0,
      // top: '50%',
      // left: '50%',
      // marginRight: '-50%',
      // transform: 'translate(-50%, -50%)',
      // borderRadius: '20px',
      overflow: 'hidden',
      overflowX: 'hidden'
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.2)'
    }
  };

  return (
    <>
      <main className={styles.main}>
        <Link href='../'>
          &lt;&lt; 戻る
        </Link>
        <div className={styles.container}>
          <div className={styles.sub_container}>
            <div className={styles.headline}>
              精算レポート
            </div>
            <div className={styles.contents}>
              <div className={styles.item}>
                <div>組数</div>
                <div>{0}組</div>
              </div>
              <div className={styles.item}>
                <div>客数</div>
                <div>{0}人</div>
              </div>
              <div className={styles.item}>
                <div>客単価</div>
                <Price price={0} />
              </div>
              <div className={styles.item}>
                <div>点数</div>
                <div>{0}点</div>
              </div>
              <div className={styles.item}>
                <div>売上</div>
                <Price price={0} />
              </div>
              <div className={styles.item}>
                <div>値引</div>
                <Price price={0} />
              </div>
            </div>
          </div>
          <div className={styles.sub_container}>
            <div className={styles.headline}>
              レジクローズ時実績入力
            </div>
            <div className={styles.contents}>
              <div className={styles.item}>
                <div>組数</div>
                <button onClick={() => { setIsModalOpen(true); }}>hoge</button>
                <div>{0}組</div>
              </div>
            </div>
          </div>
        </div>
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={() => { setIsModalOpen(false); }}
          style={modalStyle}
          onAfterOpen={() => {
          }}
        >
          <div className={styles.modal_container}>
            <div className={styles.container}>

              <div onClick={() => { setIsModalOpen(false); }}>
                {/* <div style={{padding: '10px'}}> */}
                <Image
                  src='/close.svg'
                  width={30}
                  height={30}
                  alt="close"
                />
                {/* </div> */}
                <div className={styles.sub_container}>
                  <div className={styles.headline}>
                    hoge
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReactModal>
      </main>
    </>
  );
}
// 組数
// 客数
// 客単価
// 点数
// 売上
// 値引
// レジオープン時現金
// 
// 現金
// 
// 
// 
