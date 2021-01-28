import React from "react";
import StyledHome from "../Styled/StyledHome";
import Shadows from "../Styled/Shadows";
import { Link } from "react-router-dom";
import { SessionContext } from "../Context/SessionContext";

const photos = ["shadows", "shine", "liquid"];
function Home() {
  const { session, setSession } = React.useContext(SessionContext);
  function handleClick(e) {
    setSession(e);
  }
  return (
    <>
      <StyledHome>
        {photos.map((e, i) => (
          <Link key={i} onClick={() => handleClick(e)} to={`/galeria`}>
            {e === "shadows" ? <Shadows /> : null}
          </Link>
        ))}
      </StyledHome>
    </>
  );
}

export default Home;
