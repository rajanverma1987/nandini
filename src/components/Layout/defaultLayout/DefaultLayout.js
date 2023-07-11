import { IoIosMenu } from "react-icons/io";
import styles from "./styles/defaultlayout.module.css";
import Select from "../../select/Select";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/store";
import SideMenu from "../sidemenu/Sidemenu";
import Tabs from "../../tabs/tabs";
import Tab from "../../tab/tab";
import { AiFillDownCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";

function DefaultLayout() {
  const history = useHistory();

  const { setCompany, user } = useContext(Context);
  const { tabs } = useContext(Context);
  const [showMenu, setShowMenu] = useState(true);
  const [showUserMenu, setShowMuserenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      if (user[0].UserName) {
        setUserName(user[0].UserName);
        setLoading(false);
      } else {
        history.push("/login");
        setLoading(false);
      }
    } catch (e) {
      // console.log(e);
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
          {tabs && tabs.length > 0 && (
            <Tabs>
              {tabs.map((tab, index) => {
                return (
                  <Tab title={tab.name} tab={tab} key={`tabk${index}`}>
                    <tab.component />
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

function CheckUser(Component) {
  const { user } = useContext(Context);
  return Component;
}
export default DefaultLayout;
