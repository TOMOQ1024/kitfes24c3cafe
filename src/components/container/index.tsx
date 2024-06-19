import { DetailedHTMLProps, HTMLAttributes } from "react"
import styles from "./index.module.scss";

export default function Container (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`${styles.main} ${props.className ?? ''}`}
    />
  )
}