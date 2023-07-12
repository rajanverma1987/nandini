import { IoIosMenu } from "react-icons/io";
import styles from "./styles/defaultlayout.module.css";
import Select from "../../select/Select";
import { useContext, useEffect, useState } from "react";
import {
  Context,
  LayoutContext,
  LayoutContextProvider,
} from "../../../store/store";
import SideMenu from "../sidemenu/Sidemenu";
import Tabs from "../../tabs/tabs";
import Tab from "../../tab/tab";
import { AiFillDownCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Modal from "../../modal/Modal";
import MenuList from "../../MenuList/MenuList";

function MainLayout() {
  const history = useHistory();

  const { setCompany, user, modal, showModal, CompanyID } = useContext(Context);
  const { tabs } = useContext(LayoutContext);
  const [showMenu, setShowMenu] = useState(true);
  const [showUserMenu, setShowMuserenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user[0].UserName) {
        setUserName(user[0].UserName);
        setLoading(false);
      } else {
        history.push("/login");
        setLoading(false);
      }
    } catch (e) {
      history.push("/");
    }
  }, []);

  function onCompanyChange() {
    const { selectedOptions } = arguments[2];
    console.log("selectedOptions[0]", selectedOptions[0]);
    setCompany(selectedOptions[0]);
  }

  function logOut() {
    localStorage.removeItem("user");
    history.push("/");
  }
  return (
    <div className={styles.main}>
      {showMenu && (
        <div className={styles.sidebar}>
          <SideMenu />
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="left">
            <IoIosMenu
              className={styles.menuIcon}
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
            />
            <span className={styles.headerHeading}>TALLY DATA WAREHOUSE</span>
          </div>
          <div>
            <Select
              value={CompanyID}
              name="Company"
              value={1}
              selectorText="Select Company"
              options={[{ id: 1, title: "Company 1" }]}
              fetch={{
                api: "Company/GetData",
                data: {},
                fields: ["ID", "RemoteCmpName"],
              }}
              onChange={onCompanyChange}
            />
            <span className={styles.useDetail}>
              <span>
                <img src="/images/user-img.png" />
              </span>
              <span>{userName}</span>
              <span
                onClick={() => {
                  setShowMuserenu((prev) => !prev);
                }}
              >
                <AiFillDownCircle />
              </span>
              {showUserMenu && (
                <div className={styles.userMenu}>
                  <ul>
                    <li onClick={logOut}>Logout</li>
                  </ul>
                </div>
              )}
            </span>
          </div>
        </div>
        <div className={styles.appContainer}>
          {modal && (
            <Modal onClose={() => showModal(false)}>
              <p className={styles.modalMessage}>{modal}</p>
            </Modal>
          )}

          {tabs && tabs.length > 0 && (
            <Tabs key={"tab"}>
              {tabs.map((tab, index) => {
                return (
                  <Tab title={tab.name} tab={tab} key={`tabk${index}`}>
                    <tab.component key={`tab_${index}`} />
                  </Tab>
                );
              })}
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
}

function DefaultLayout() {
  return (
    <LayoutContextProvider>
      <MainLayout />
    </LayoutContextProvider>
  );
}
export default DefaultLayout;
