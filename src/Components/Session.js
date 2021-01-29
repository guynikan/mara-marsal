import React from "react";
import { SessionContext } from "../Context/SessionContext";
import SessionLiquid from "./SessionLiquid";
import SessionShadow from "./SessionShadow";
import SessionShine from "./SessionShine";

function Session() {
  const { session } = React.useContext(SessionContext);

  if (session === "shadows") return <SessionShadow />;
  if (session === "shine") return <SessionShine />;
  if (session === "liquid") return <SessionLiquid />;
}

export default Session;
