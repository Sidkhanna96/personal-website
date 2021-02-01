import { Route, Switch } from "react-router-dom";

import Main from "./Components/Main/Main";
import "./App.scss";

function App() {
  // Loading Screen
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setIsLoading(false);
  //   setTimeout(() => setIsLoading(false), 1200);
  // }, []);

  return (
    <div>
      <div className="App">
        <Switch>
          <Route path="/" component={Main} exact />
        </Switch>
      </div>
    </div>
  );
}

export default App;
