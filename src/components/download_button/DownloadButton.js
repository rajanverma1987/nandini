import { BsCloudDownload } from "react-icons/bs";
import styles from "./styles/dowloadButton.module.css";
export default function DownloadButton({ link }) {
  return (
    <>
      <a href={link} download className={styles.link}>
        <BsCloudDownload />
      </a>
    </>
  );
}
