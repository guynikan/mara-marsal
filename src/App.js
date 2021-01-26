import "./reset.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { SessionStorage } from "./Components/SessionContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <SessionStorage>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/galeria">
              <Gallery />
            </Route>
          </SessionStorage>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
