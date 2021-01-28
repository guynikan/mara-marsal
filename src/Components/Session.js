import React from "react";
import { SessionContext } from "../Context/SessionContext";
import StyledGallery from "../Styled/StyledGallery";

function Session() {
  const { session, photos } = React.useContext(SessionContext);

  function columns(containerWidth) {
    let columns = 1;
    if (containerWidth >= 500) columns = 2;
    if (containerWidth >= 900) columns = 3;
    return columns;
  }

  return (
    <div style={{ display: "flex", maxWidth: "100%" }}>
      <div style={{ display: "block" }}>
        <StyledGallery
          photos={photos[session]}
          direction={"column"}
          columns={columns}
        />
      </div>
      <div>Teste</div>
    </div>
  );
}

export default Session;
