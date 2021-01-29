import React, { useLayoutEffect } from "react";
import { Grid, Cell } from "styled-css-grid";
import { SessionContext } from "../Context/SessionContext";

function SessionShine() {
  const {
    session,
    photos,
    containerWidth,
    resizeGrid,
    imageGrid,
  } = React.useContext(SessionContext);
  const gridEl = React.useRef(null);

  useLayoutEffect(() => {
    const { observer, animationFrameID } = resizeGrid(gridEl);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrameID);
    };
  });

  let columns = 1;
  let areas = ["a", "b", "c", "d", "e"];
  if (containerWidth >= 500) {
    columns = 2;
    areas = ["a b", "e e", "c d"];
    if (containerWidth >= 900) {
      columns = 4;
      areas = ["a b c d", "e e c d"];
    }
  }

  return (
    <>
      <Grid ref={gridEl} columns={columns} areas={areas} gap="10px">
        {photos[session].map((photo, i) => {
          return (
            <Cell area={imageGrid(photo.position)} height={1}>
              <img src={photo.src} alt={`model-${i}`} />
            </Cell>
          );
        })}
      </Grid>
    </>
  );
}

export default SessionShine;
