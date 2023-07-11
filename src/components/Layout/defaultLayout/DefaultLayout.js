import { useContext, useState } from "react";
import { AiFillDownCircle } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { Context } from "../../../store/store";
import Select from "../../select/Select";
import Tab from "../../tab/tab";
import Tabs from "../../tabs/tabs";
import SideMenu from "../sidemenu/Sidemenu";
import styles from "./styles/defaultlayout.module.css";

function DefaultLayout() {
  const { setCompany, logOut } = useContext(Context);
  const history = useHistory();
  const { tabs, removeTab } = useContext(Context);
  const [showMenu, setShowMenu] = useState(true);
  const [showUserMenu, setShowMuserenu] = useState(false);

  function onCompanyChange() {
    const { selectedOptions } = arguments[2];
    console.log("selectedOptions[0]", selectedOptions[0]);
    setCompany(selectedOptions[0]);
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
              <span>User Name</span>
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
                    <li onClick={() => history.push("/login")}>Logout</li>
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
