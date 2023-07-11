import { IoMdClose } from "react-icons/io";
import styles from "./styles/modal.module.css";
import Icon from "../icon/icon";

export default function Modal({
  children,
  title = "",
  onClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
  },
}) {
  return (
    <>
      <div className={styles.modalContainer} onClick={onClose}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={styles.modalHeader}>
            {title}
            <Icon onClick={onClose}>
              <IoMdClose />
            </Icon>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
