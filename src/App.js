import React from "react";
import Videojs from "./video.js";
import videoJsOptions from "./options";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Videojs {...videoJsOptions} />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Video Streams
        </Dropdown.Toggle>

        <Dropdown.Menu className="d-flex flex-column align-items-center">
          <Button>Video 1</Button>
          <Button>Video 2</Button>
          <Button>Video 3</Button>
          <Button>Video 4</Button>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default App;
