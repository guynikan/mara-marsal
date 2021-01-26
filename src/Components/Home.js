import React from "react";
import StyledGallery from "../Styled/StyledGallery";
import Shadows from "../Styled/Shadows";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Gallery from "./Gallery";
import { SessionContext } from "./SessionContext";

const photos = ["shadows", "shine", "liquid"];
function Home() {
  const { session, setSession } = React.useContext(SessionContext);
  function handleClick(e) {
    console.log("pegou o click do link", e);
    setSession(e);
  }
  return (
    <>
      <StyledGallery>
        {photos.map((e, i) => (
          <Link key={i} onClick={() => handleClick(e)} to={`/galeria`}>
            {e === "shadows" ? <Shadows /> : null}
          </Link>
        ))}
      </StyledGallery>
    </>
  );
}

export default Home;
