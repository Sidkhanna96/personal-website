import { Route, Switch } from "react-router-dom";

import Main from "./Components/Main/Main";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
    </div>
  );
}

export default App;
