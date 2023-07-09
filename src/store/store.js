import { useState } from "react";
import { createContext } from "react";

export const Context = createContext({
  updateTableData: () => {},
  tbldata: {},
});

export default function ContextProvider({ children }) {
  const [tbldata, setData] = useState({});

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
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
