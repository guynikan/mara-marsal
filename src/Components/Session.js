import React from "react";
import { SessionContext } from "../Context/SessionContext";
import SessionShadow from "./SessionShadow";

function Session() {
  const { session } = React.useContext(SessionContext);

  if (session === "shadows") return <SessionShadow />;
}

export default Session;
