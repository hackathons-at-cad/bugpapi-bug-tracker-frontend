import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import AddBtn from "./components/layout/addBtn";
import AddBugModal from "./components/bugs/addBugModal";
import AddEngineersModal from "./components/engineers/addEngineersModal";
import EngineerListModal from "./components/engineers/engineerListModal";
import BugsList from "./components/bugs/bugsList";
import EditBugModal from "./components/bugs/editBugModal";
import AddLabelModal from "./components/labels/addLabelModal";
import LabelsListModal from "./components/labels/labelsListModal";
import StatuszListModal from "./components/statusz/statuszListModal";

const App = () => {
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <div>
        <h3 className="app-title">BugPapi</h3>
        <AddBtn />
        <AddBugModal />
        <EditBugModal />
        <AddEngineersModal />
        <EngineerListModal />
        <BugsList />
        <AddLabelModal />
        <LabelsListModal />
        <StatuszListModal />
      </div>
    </Provider>
  );
};

export default App;
