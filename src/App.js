import React, { Suspense, useContext, useEffect } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import DefaultLayout from "./components/Layout/defaultLayout/DefaultLayout";
import Login from "./Pages/Login/Login";
import { Context } from "./store/store";
import { axios_, getIPAddress } from "./utilities/utll";
import axios from "axios";

export default function App() {
  const { setCompany, setIp } = useContext(Context);

  useEffect(() => {
    try {
      fetchCompany();
    } catch (e) {
      console.log(e);
    }
    // GET COMPANIES
    async function fetchCompany() {
      const res = await axios_.post("Company/GetData", {});
      if (res.status == 200) {
        setCompany(res.data.Data[0].ID);
      }
      const ip = await axios.get("https://api.ipify.org?format=json");
      setIp(ip);
      // GET IP
    }
  }, []);
  return (
    <BrowserRouter>
      <Suspense>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/login" />;
          }}
        />
        <Route path="/login" component={Login} />
        <Route path="/postlogin" component={DefaultLayout} />
      </Suspense>
    </BrowserRouter>
  );
}
