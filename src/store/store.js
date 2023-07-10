import { useState } from "react";
import { createContext } from "react";

export const Context = createContext({
  updateTableData: () => {},
  tbldata: {},
  setCompany: () => {},
  companyID: undefined,
  addTab: () => {},
  removeTab: () => {},
  activateTab: () => {},
  activeTab: {},
  tabs: [],
  user: {},
  logOut: () => {},
});

export default function ContextProvider({ children }) {
  const [tbldata, setData] = useState({});
  const [companyID, setCompany] = useState({});
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState([]);
  const [user, setUser] = useState({});
  function logOut() {
    setUser({});
  }

  function addTab(tab) {
    setTabs((prev) => {
      if (!prev.some((oTab) => oTab.name === tab.name)) {
        return [...prev, tab];
      }
      return prev;
    });
  }
  function removeTab(tab) {
    setTabs((prev) => {
      let obj = prev.filter((opendTab) => opendTab.name !== tab.name);
      if (obj.length > 0) {
        activateTab(obj[obj.length - 1]);
      }
      return obj;
    });
  }

  function activateTab(tab, add = false) {
    setActiveTab(tab);
    if (add) addTab(tab);
  }
  function updateTableData(name, data) {
    setData((prev) => {
      let obj = { ...prev };
      obj[name] = data;
      return obj;
    });
  }
  const value = {
    tbldata,
    companyID,
    activeTab,
    tabs,
    user,
    updateTableData,
    setCompany,
    addTab,
    removeTab,
    activateTab,
    logOut,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
