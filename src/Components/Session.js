import React from "react";
import { SessionContext } from "./SessionContext";
import StyledGallery from "../Styled/StyledGallery";

function Session() {
  const { session, photos } = React.useContext(SessionContext);

  return (
    <StyledGallery
      style={{ display: "flex", justifyContent: "center" }}
      rowHeight={400}
      enableImageSelection={false}
      images={photos[session]}
    />
  );
}

export default Session;
