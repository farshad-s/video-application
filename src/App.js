import React from "react";
import Videojs from "./video.js";
import videoJsOptions from "./options";

function App() {
  return <Videojs {...videoJsOptions} />;
}

export default App;
