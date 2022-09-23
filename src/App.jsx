import React from "react";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        fontFamily: "Montserrat",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
