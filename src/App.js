import React from "react";
import Videojs from "./video.js";
import videoJsOptions from "./options";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <Videojs {...videoJsOptions} />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Button>Video 1</Button>
          <Button>Video 2</Button>
          <Button>Video 3</Button>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default App;
