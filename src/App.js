import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import ContainerListWork from "components/ListWork";
import ContainerRedaction from "components/Redaction";
import ContainerCreationWork from "components/CreationWork/ContainerCreationWork";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={ContainerListWork} />
      <Route path="/edit-ad/:id" component={ContainerRedaction} />
      <Route path="/create-add" component={ContainerCreationWork} />
    </BrowserRouter>
  );
};

export default App;
