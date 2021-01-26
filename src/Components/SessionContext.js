import React from "react";
import session1photo1 from "../Assets/Photos/session1/IMG_7153_.jpg";
import session2photo1 from "../Assets/Photos/session2/IMG_7220_.jpg";

export const SessionContext = React.createContext();

export const SessionStorage = ({ children }) => {
  const [session, setSession] = React.useState(null);
  const [photos, setPhotos] = React.useState({
    shadows: [
      {
        src: session1photo1,
        thumbnail: session1photo1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
      },
    ],
    shine: [
      {
        src: session2photo1,
        thumbnail: session2photo1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
      },
    ],
    liquid: ["teste3"],
  });
  return (
    <SessionContext.Provider value={{ session, setSession, photos }}>
      {children}
    </SessionContext.Provider>
  );
};
