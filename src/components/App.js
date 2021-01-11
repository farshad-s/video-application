import React, { useState } from "react";
import Videojs from "./video.js";
import videoJsOptions from "./options";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "../App.css";
import { Player } from "video-react";

const streams = [
  {
    name: "Big Buck Bunny",
    src:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    name: "Blender Open Movie",
    src:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    name: "Introducing ChromeCast",
    src:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    name: "Lego Video",
    src: "http://techslides.com/demos/sample-videos/small.webm",
  },
];

function App() {
  return (
    <div className="d-flex flex-column align-items-center container">
      <Player src={this.state.currentStream.src} />
      <Dropdown className="btn">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Video Streams
        </Dropdown.Toggle>

        <Dropdown.Menu className="d-flex flex-column align-items-center">
          {streams.map((stream) => (
            <Button
              className="btn"
              onClick={() => {
                this.setState({ currentStream: stream });
              }}
            >
              {stream.name}
            </Button>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default App;
