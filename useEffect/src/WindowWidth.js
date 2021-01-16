import React, { useEffect, useState } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // everything inside here will execute every single time app renders
    window.addEventListener("resize", handleResize);

    //let's say we want to remove the event listener
    // useEffect takes a cleanup function
    // everytime useEffect gets run, this function is run BEFORE to clean up whatever we did last time!
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div> {windowWidth} </div>
    </>
  );
}
