import React from "react";
import ComponenteApiWalker from "./components/ApiComponent";
import ComponenteRuta from "./components/ComponenteRuta";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => {
  return(
    <BrowserRouter>
    <div className="container">
      <Switch>
        <Route path="/" render={() => <ComponenteApiWalker/> } />
        <Route path="/:id" render={(routeProps) => <ComponenteRuta {...routeProps}/>} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
