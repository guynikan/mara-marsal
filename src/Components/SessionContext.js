import React from "react";

const images = require.context("../Assets/Photos", true);

export const SessionContext = React.createContext();

export const SessionStorage = ({ children }) => {
  const [session, setSession] = React.useState(null);
  const [photos, setPhotos] = React.useState({
    shadows: dinamicSet("shadows"),
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
        thumbnail: images(`./${session}/photo${i}.jpg`).default,
        thumbnailWidth: 500,
        thumbnailHeight: 800,
      });
    }

    return array;
  }

  return (
    <SessionContext.Provider value={{ session, setSession, photos }}>
      {children}
    </SessionContext.Provider>
  );
};
