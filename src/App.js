import React, { Component } from "react";
import Videojs from "./video.js";
import videoJsOptions from "./options";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "./App.css";

const streams = [
  {
    name: "Big Buck Bunny",
    src:
      "https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8",
  },
  {
    name: "HD World",
    src:
      "https://multiplatform-f.akamaihd.net/i/multi/april11/hdworld/hdworld_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8",
  },
  {
    name: "Sintel",
    src:
      "https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8",
  },
  {
    name: "Parkour",
    src:
      "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
}

export default App;
