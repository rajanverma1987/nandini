import { useState } from "react";
import { createContext } from "react";

export const Context = createContext({
  updateTableData: () => {},
  tbldata: {},
  setCompany: () => {},
  CompanyID: undefined,
  addTab: () => {},
  removeTab: () => {},
  activateTab: () => {},
  activeTab: {},
  tabs: [],
  user: {},

  ip: undefined,
  setIp: () => {},
  setUser: () => {},
});

export default function ContextProvider({ children }) {
  const [tbldata, setData] = useState({});
  const [CompanyID, setCompany] = useState({});
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState([]);
  const [user, setUser] = useState({});
  const [ip, setIp] = useState({});

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
    CompanyID,
    activeTab,
    tabs,
    user,
    ip,
    setIp,
    setUser,
    updateTableData,
    setCompany,
    addTab,
    removeTab,
    activateTab,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
