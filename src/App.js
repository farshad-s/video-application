import React from "react";
import Videojs from "./video.js";
import videoJsOptions from "./options";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <Videojs {...videoJsOptions} />
    </div>
  );
}

export default App;
