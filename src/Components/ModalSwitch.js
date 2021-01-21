import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Contact from "./Contact";
import Modal from "./Modal";
import Home from "./Home";

function ModalSwitch() {
  let location = useLocation();

  const background = location.state && location.state.background;

  return (
    <div>
      {/* <Switch> */}
      {/* <Route exact path="/" children={<Home />} /> */}
      {/* </Switch> */}

      {background && <Route path="/contact" children={<Modal />} />}
    </div>
  );
}

export default ModalSwitch;
