import React from "react";
const images = require.context("../Assets/Photos", true);

let teste = [
  {
    src: images("./shadows/photo1.jpg").default,
    width: 2500,
    height: 3681,
  },
  {
    src: images("./shadows/photo2.jpg").default,
    width: 2500,
    height: 3750,
  },
];

let teste2 = [
  {
    src: images("./shadows/photo3.jpg").default,
    width: 2500,
    height: 3750,
  },
  {
    src: images("./shadows/photo4.jpg").default,
    width: 2500,
    height: 3750,
  },
  {
    src: images("./shadows/photo5.jpg").default,
    width: 2500,
    height: 3750,
  },
];

export const SessionContext = React.createContext();

export const SessionStorage = ({ children }) => {
  const [session, setSession] = React.useState("shadows");
  const [photos, setPhotos] = React.useState({
    shadows: teste,
    shine: dinamicSet("shine"),
    liquid: dinamicSet("liquid"),
  });

  function dinamicSet(session) {
    let array = [];
    let count = 6;
    if (session === "liquid") count = 5;
    for (let i = 1; i < count; i++) {
      array.push({
        src: images(`./${session}/photo${i}.jpg`).default,
        width: 3,
        height: 4,
      });
    }

    return array;
  }

  return (
    <SessionContext.Provider value={{ session, setSession, photos, teste2 }}>
      {children}
    </SessionContext.Provider>
  );
};
