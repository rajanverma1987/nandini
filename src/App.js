import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <Suspense fallback={Loader}>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/login" />;
            }}
          />
          <Route path="/login" component={Login} />
          <Route path="/postlogin" component={DefaultLayout} />

          <ToastContainer
            enableMultiContainer
            containerId={"TOP_RIGHT"}
            position={toast.POSITION.TOP_RIGHT}
          />
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
