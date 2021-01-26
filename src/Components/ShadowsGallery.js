import React from "react";
import Galleria from "react-grid-gallery";
import { SessionContext } from "./SessionContext";

function ShadowsGallery() {
  const { photos } = React.useContext(SessionContext);

  console.log("valor de shadows", photos);

  return <div>TESTE</div>;
}

export default ShadowsGallery;
