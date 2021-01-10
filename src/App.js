import React from "react";
import Videojs from "./video.js";
import videoJsOptions from "./options";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column align-items-center container">
      <Videojs {...videoJsOptions} />
      <Dropdown className="btn">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Video Streams
        </Dropdown.Toggle>

        <Dropdown.Menu className="d-flex flex-column align-items-center">
          <Button className="btn">Video 1</Button>
          <Button className="btn">Video 2</Button>
          <Button className="btn">Video 3</Button>
          <Button className="btn">Video 4</Button>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default App;
