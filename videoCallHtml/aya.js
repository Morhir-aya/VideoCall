import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [localTrackState, setLocalTrackState] = useState({
    audioTrackMuted: false,
    videoTrackMuted: false,
  });

  const [remoteTracks, setRemoteTracks] = useState({});

  const joinStreams = async () => {
  };

  const handleUserJoined = async (user, mediaType) => {
    // AgoraRTC logic to handle user joining goes here
    // Create UI elements for remote users and subscribe to their tracks
  };

  const handleUserLeft = (user) => {
    // AgoraRTC logic to handle user leaving goes here
    // Remove UI elements for the departed user
  };

  useEffect(() => {
    // Initialize AgoraRTC client and set up event listeners
    // Remember to clean up when the component unmounts

    return () => {
      // Cleanup code when the component unmounts
    };
  }, []);

  return (
    <div className="App">
      <main>
        <h1 id="site-title">EverMeet</h1>
        <div id="join-wrapper">
          <input id="username" type="text" placeholder="Enter your name..." />
          <button id="join-btn" onClick={joinStreams}>
            Join Stream
          </button>
        </div>
        <div id="user-streams"></div>
        <div id="footer">
          <div className="icon-wrapper">
            <img className="control-icon" id="camera-btn" src="./assets/video.svg" alt="Camera" />
          </div>
          <div className="icon-wrapper">
            <img className="control-icon" id="mic-btn" src="./assets/microphone.svg" alt="Microphone" />
          </div>
          <div className="icon-wrapper">
            <img className="control-icon" id="leave-btn" src="./assets/leave.svg" alt="Leave" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
