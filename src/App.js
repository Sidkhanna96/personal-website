import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import Main from "./Components/Main/Main";
import Loader from "./Components/Loader/Loader";
import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  // Loading Screen
  // useEffect(() => {
  //   setIsLoading(false);
  //   setTimeout(() => setIsLoading(false), 1200);
  // }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="App">
          <Switch>
            <Route path="/" component={Main} exact />
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
