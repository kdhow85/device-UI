import React from "react";
import HomePage from "./HomePage";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageDevicePage from "./ManageDevicePage";
import AddClientPage from "./AddClientPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/device/:slug" component={ManageDevicePage} />
        <Route path="/device" component={ManageDevicePage} />
        <Route path="/client/:id" component={AddClientPage} />
        <Route path="/client" component={AddClientPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
