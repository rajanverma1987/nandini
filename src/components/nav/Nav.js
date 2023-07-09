import Image from "next/image";
import styles from "./styles/nav.module.css";
export default function Nav() {
  return (
    <div className={styles.nav}>
      <Image src={"/logo.png"} height={40} width={200} alt="logo" />
    </div>
  );
}
