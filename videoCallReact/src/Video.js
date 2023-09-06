import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";

export default function Video(props) {
  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(10);

  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(10 / (users.length + 1)), 4));
  }, [users, tracks]);

  const videoStyle = {
    height: "100%",
    width: "100%",
    borderRadius: "23px", // Adjust the border radius as needed
    overflow: "hidden", // To ensure the border radius is applied properly
  };

  return (
    <Grid container style={{ height: "100%", gridGap: "10px" }}>
      <Grid item xs={gridSpacing}>
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={videoStyle}
        />
      </Grid>
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <Grid item xs={gridSpacing}>
                <AgoraVideoPlayer
                  videoTrack={user.videoTrack}
                  key={user.uid}
                  style={videoStyle}
                />
              </Grid>
            );
          } else return null;
        })}
    </Grid>
  );
}