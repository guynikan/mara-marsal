import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./Home";
import Session from "./Session";
import Modal from "./Modal";
import Contact from "./Contact";

function ModalSwitch() {
  let location = useLocation();

  let background = location.state && location.state.background;
  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/galeria">
          <Session />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      {background && (
        <Route path="/contact">
          <Modal />
        </Route>
      )}
    </div>
  );
}

export default ModalSwitch;
