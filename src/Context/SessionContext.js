import React from "react";
import ResizeObserver from "resize-observer-polyfill";
const images = require.context("../Assets/Photos", true);

export const SessionContext = React.createContext();

function dinamicSet(session) {
  let array = [];
  let count = 6;
  if (session === "liquid") count = 5;
  for (let i = 1; i < count; i++) {
    array.push({
      src: images(`./${session}/photo${i}.jpg`).default,
      position: i,
    });
  }

  return array;
}

export const SessionStorage = ({ children }) => {
  const [session, setSession] = React.useState("shadows");
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [photos, setPhotos] = React.useState({
    shadows: dinamicSet("shadows"),
    // shine: dinamicSet("shine"),
    liquid: dinamicSet("liquid"),
  });

  function resizeGrid(ref) {
    let animationFrameID = null;
    const observer = new ResizeObserver((entries) => {
      const newWidth = entries[0].contentRect.width;
      if (containerWidth !== newWidth) {
        animationFrameID = window.requestAnimationFrame(() => {
          setContainerWidth(Math.floor(newWidth));
        });
      }
    });
    observer.observe(ref.current);

    return { observer, animationFrameID };
  }

  function imageGrid(position) {
    let area = "";
    let height = 0;

    switch (position) {
      case 1:
        area = "a";
        break;
      case 2:
        area = "b";
        break;
      case 3:
        area = "c";
        break;
      case 4:
        area = "d";
        break;
      case 5:
        area = "e";
        break;

      default:
        return null;
    }

    return area;
  }

  return (
    <SessionContext.Provider
      value={{
        session,
        setSession,
        photos,
        setPhotos,
        containerWidth,
        resizeGrid,
        imageGrid,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
