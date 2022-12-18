import React, { useEffect, useState } from "react";
import api from "../../services/spotify.api";
import { Container, TopImage } from "./styles";

function Playlists() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/me/playlists").then((res) => {
      setData(res.data.items);
      console.log(res.data.items);
    });
  }, []);

  return (
    <Container>
      <h1>Playlists</h1>
      <div>
        {data.length !== 0 &&
          data.map((playlist: any) => {
            return (
              <div onClick={() => (window.location.href = playlist.external_urls.spotify)}>
                <TopImage src={playlist.images[0].url} />
                <span>{playlist.name}</span>
              </div>
            );
          })}
      </div>
    </Container>
  );
}

export default Playlists;
