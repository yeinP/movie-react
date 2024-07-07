import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/about-us">
          <h1>About Us</h1>
        </Route>
        <Route exact path="/movie">
          <h1>Movie List</h1> 
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
