import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import DefaultLayout from "./components/Layout/defaultLayout/DefaultLayout";
import Loader from "./components/loader/Loader";
import Login from "./Pages/Login/Login";
class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
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
}

export default App;
