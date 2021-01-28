import React, { useLayoutEffect } from "react";
import { SessionContext } from "../Context/SessionContext";
import { Grid, Cell } from "styled-css-grid";
import StyledThreeGrid from "../Styled/StyledThreeGrid";
import ResizeObserver from "resize-observer-polyfill";

function Session() {
  const { session, photos } = React.useContext(SessionContext);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const gridEl = React.useRef(null);

  useLayoutEffect(() => {
    let animationFrameID = null;
    const observer = new ResizeObserver((entries) => {
      const newWidth = entries[0].contentRect.width;
      if (containerWidth !== newWidth) {
        animationFrameID = window.requestAnimationFrame(() => {
          setContainerWidth(Math.floor(newWidth));
        });
      }
    });
    observer.observe(gridEl.current);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrameID);
    };
  });

  let columns = 1;
  let flow = "";
  let areas = ["a", "b", "c1", "c2", "c3"];
  if (containerWidth >= 500) {
    columns = 2;
    areas = ["a b", "c1 c1", "c2 c3"];
  }
  if (containerWidth >= 900) {
    columns = 3;
    areas = ["a b c1", "a b c2", " a b c3"];
  }

  if (session === "shadows")
    return (
      <div style={{ overflow: "hidden" }}>
        <Grid ref={gridEl} columns={columns} areas={areas} gap="10px">
          <Cell area={"a"} height={3}>
            <img src={photos[session][0].src} />
          </Cell>
          <Cell area={"b"} height={3}>
            <img src={photos[session][1].src} />
          </Cell>
          <Cell area={"c1"} height={1}>
            <StyledThreeGrid src={photos[session][2].src} />
          </Cell>
          <Cell area={"c2"} height={1}>
            <StyledThreeGrid src={photos[session][3].src} />
          </Cell>
          <Cell area={"c3"} height={1}>
            <StyledThreeGrid src={photos[session][4].src} />
          </Cell>
        </Grid>
      </div>
    );
  return (
    <Grid columns={3} gap="2px">
      {photos[session].map((photo) => (
        <Cell>
          <div>
            <img style={{ maxWidth: "100%" }} src={photo.src} />
          </div>
        </Cell>
      ))}
    </Grid>
  );
}

export default Session;
