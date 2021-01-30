import "./reset.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { SessionStorage } from "./Context/SessionContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ModalSwitch from "./Components/ModalSwitch";

function App() {
  return (
    <>
      <Router>
        <Header />
        <SessionStorage>
          <ModalSwitch />
        </SessionStorage>
        <Footer />
      </Router>
    </>
  );
}

export default App;
