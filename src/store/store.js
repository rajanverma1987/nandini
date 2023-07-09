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
});

export default function ContextProvider({ children }) {
  const [tbldata, setData] = useState({});
  const [companyID, setCompany] = useState({});
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState([]);

  function addTab(tab) {
    setTabs((prev) => {
      if (!prev.some((oTab) => oTab.name == tab.name)) {
        return [...prev, tab];
      }
      return prev;
    });
  }
  function removeTab(tab) {
    setTabs((prev) => {
      let obj = prev.filter((opendTab) => opendTab.name != tab.name);
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
    updateTableData,
    tbldata,
    activeTab,
    companyID,
    setCompany,
    addTab,
    removeTab,
    activateTab,
    activeTab,
    tabs,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
