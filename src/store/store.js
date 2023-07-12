import { useState } from "react";
import { createContext } from "react";

export const Context = createContext({
  updateTableData: () => {},
  tbldata: {},
  setCompany: () => {},
  CompanyID: undefined,
  user: {},
  ip: undefined,
  setIp: () => {},
  setUser: () => {},
  displayModal: () => {},
  modal: false,
  showModal: () => {},
});

export default function ContextProvider({ children }) {
  const [tbldata, setData] = useState({});
  const [CompanyID, setCompany] = useState({});
  const [user, setUser] = useState({});
  const [ip, setIp] = useState({});
  const [modal, showModal] = useState(false);

  function displayModal(res, messageText) {
    let message = messageText
      ? messageText
      : res.data?.Data.length > 0
      ? res.data?.Data[0].Message
      : res.data.Message;
    showModal(message);
    setTimeout(() => {
      showModal(false);
    }, 3000);
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
    user,
    ip,
    setIp,
    setUser,
    updateTableData,
    setCompany,
    displayModal,
    showModal,
    modal,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const LayoutContext = createContext({
  activeTab: [],
  tabs: [],
  addTab: () => {},
  removeTab: () => {},
  activateTab: () => {},
});
export function LayoutContextProvider({ children }) {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState([]);

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

  const value = {
    activeTab,
    tabs,
    addTab,
    removeTab,
    activateTab,
  };
  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}
