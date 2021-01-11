import React, { useState } from "react";
import Videojs from "./video.js";
import videoJsOptions from "./options";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
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
  const [initialStream, newStream] = useState(streams[0].src);

  return (
    <div>
      <Navbar expand="lg" bg="dark" className="justify-content-center">
        <Navbar.Brand className="text-primary">
          Video Stream Application
        </Navbar.Brand>
      </Navbar>
      <div className="d-flex flex-column align-items-center container">
        <Player src={initialStream} />
        <Dropdown className="btn">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Video Streams
          </Dropdown.Toggle>

          <Dropdown.Menu className="d-flex flex-column align-items-center">
            {streams.map((stream, index) => (
              <Button
                className="btn"
                onClick={() => {
                  newStream(streams[index].src);
                }}
              >
                {stream.name}
              </Button>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default App;
