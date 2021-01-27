import React from "react";
import { SessionContext } from "./SessionContext";
import Gallery from "react-grid-gallery";

function Session() {
  const { session, photos } = React.useContext(SessionContext);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Gallery
        rowHeight={400}
        enableImageSelection={false}
        images={photos[session]}
      />
    </div>
  );
}

export default Session;
