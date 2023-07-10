import { IoIosMenu } from "react-icons/io";
import styles from "./styles/defaultlayout.module.css";
import Select from "../../select/Select";
import { useContext, useState } from "react";
import { Context } from "../../../store/store";
import SideMenu from "../sidemenu/Sidemenu";
import Tabs from "../../tabs/tabs";
import Tab from "../../tab/tab";
import { useEffect } from "react";

export default function DefaultLayout() {
  const { setCompany } = useContext(Context);
  const { tabs, removeTab } = useContext(Context);
  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {}, []);
  function onCompanyChange() {
    const { selectedOptions } = arguments[2];
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
        </div>
        <div className={styles.appContainer}>
          <div className={styles.tabs}>
            {tabs && tabs.length > 0 && (
              <Tabs>
                {tabs.map((tab) => {
                  return (
                    <Tab title={tab.name} tab={tab}>
                      <tab.component />
                    </Tab>
                  );
                })}
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
