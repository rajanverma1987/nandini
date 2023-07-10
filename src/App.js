import React, { Suspense, useContext, useEffect } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import DefaultLayout from "./components/Layout/defaultLayout/DefaultLayout";
import Login from "./Pages/Login/Login";
import { Context } from "./store/store";
import { axios_ } from "./utilities/utll";

export default function App() {
  const { setCompany } = useContext(Context);
  useEffect(() => {
    try {
      fetchCompany();
    } catch (e) {
      console.log(e);
    }

    async function fetchCompany() {
      const res = await axios_.post("Company/GetData", {});
      if (res.status == 200) {
        setCompany(res.data.Data[0].ID);
      }
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
