import { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import { useUser } from "../../store/user/user.slice";
import { Container, Content, TopImage } from "./styles";

function TopArtists() {
  const { userState } = useUser();
  const [current, setCurrent] = useState({} as typeof userState.topArtists.items[0]);
  return (
    <Container>
      <Content>
        {userState.topArtists.items.map((artist: any, index: number) => {
          return (
            <ProfileCard
              type="artist"
              item={artist}
              key={`a${index}`}
              onClick={() => {
                setCurrent(artist);
              }}
            />
          );
        })}
      </Content>
      <Content>
        {Object.keys(current).length !== 0 && (
          <div className="curArtist">
            <TopImage
              src={current.images[0].url}
              onClick={() => (window.location.href = current.external_urls.spotify)}
            />
            <h2>{current.name}</h2>
            <div className="stats">
              <p>
                <span>{current.followers.total}</span>followers
              </p>
              <p>
                <span>{current.genres.join(" ")}</span>genres
              </p>
              <p>
                <span>{current.popularity}%</span>popularity
              </p>
            </div>
          </div>
        )}
      </Content>
    </Container>
  );
}

export default TopArtists;
