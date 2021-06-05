import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import CharSelect from "./Pages/CharSelect";
import { CharacterProvider } from "./Context/CharacterContext";

function App() {
  return (
    <CharacterProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/characters" exact component={Characters} />
          <Route path="/characters/:char" component={CharSelect} />
        </Switch>
      </Router>
    </CharacterProvider>
  );
}

export default App;
