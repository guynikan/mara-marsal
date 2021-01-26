import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  Link,
} from "react-router-dom";
import Home from "./Home";
import { SessionContext } from "./SessionContext";
import Galleria from "react-grid-gallery";
import ShadowsGallery from "./ShadowsGallery";

const photos = ["shadows", "shine", "liquid"];

function Gallery() {
  const { session, photos } = React.useContext(SessionContext);

  return <Galleria enableImageSelection={false} images={photos[session]} />;
}

export default Gallery;
