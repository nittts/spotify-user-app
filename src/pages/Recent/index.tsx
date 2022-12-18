import { useEffect, useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import api from "../../services/spotify.api";
import { useUser } from "../../store/user/user.slice";
import { Container, Content } from "./style";

function Recent() {
  const { userState } = useUser();

  const [songs, setSongs] = useState([] as typeof userState.tracks[0][]);

  useEffect(() => {
    api.get("/me/player/recently-played").then((res) => {
      setSongs(res.data.items);
    });
  }, []);

  return (
    <Container>
      {songs.length !== 0 &&
        songs.map((song) => {
          console.log(song);
          return (
            <Content>
              <h2>Last played at {new Date(song.played_at).toLocaleDateString()}</h2>
              <span>
                {new Date(song.track.duration_ms).getMinutes() + ":" + new Date(song.track.duration_ms).getSeconds()}
              </span>
              <ProfileCard
                type="track"
                item={song.track}
                onClick={() => {
                  window.location.href = song.context.external_urls.spotify;
                }}
              />
            </Content>
          );
        })}
    </Container>
  );
}

export default Recent;
