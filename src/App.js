import "./reset.css";
import "./App.css";
import Home from "./Components/Home";
import EnterGallery from "./Components/EnterGallery";
import Footer from "./Components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import ModalSwitch from "./Components/ModalSwitch";

function App() {
  return (
    <>
      <Router>
        <ModalSwitch />
        <Home />
        <Footer />
      </Router>
    </>
  );
}

export default App;
