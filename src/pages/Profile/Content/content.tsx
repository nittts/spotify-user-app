import { clearUser, useUser } from "../../../store/user/user.slice";
import { Container, TopImage, Content } from "./styles";
import { BsSpotify } from "react-icons/bs";
import { useLoading } from "..";
import ProfileCard from "../../../components/ProfileCard";
import { useNavigate } from "react-router-dom";

function ProfileContent() {
  const { userState, dispatch } = useUser();
  const { isLoading } = useLoading();
  const navigate = useNavigate();
  function goTo(url: string) {
    window.location.href = url;
  }

  return (
    <Container>
      <header>
        <TopImage src={userState.images[0].url} />
        <div className="header-content">
          <div>
            <h1 onClick={() => goTo(userState.external_urls.spotify)}>
              {userState.display_name} {userState.product === "premium" ? <BsSpotify color="#FFD700" /> : <BsSpotify />}
            </h1>
            <span>{userState.email}</span>
          </div>
          <div>
            <p>
              <span>{userState.followers.total} </span>followers
            </p>
            <p>
              <span>{userState.following.artists.total}</span> following
            </p>
            <p>
              <span>{userState.playlists.total}</span>playlists
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/");
            localStorage.clear();
            dispatch(clearUser());
          }}
        >
          Logout
        </button>
      </header>
      <Content>
        {!isLoading && (
          <>
            <div className="topArtists">
              <div className="title">
                <h1>Top Artists of All Time</h1>
                <button onClick={() => navigate("/profile/topArtists")}>See more</button>
              </div>
              {userState.topArtists.items.map((artist: any, index: number) => {
                return (
                  <ProfileCard
                    type="artist"
                    item={artist}
                    key={`a${index}`}
                    onClick={() => goTo(artist.external_urls.spotify)}
                  />
                );
              })}
            </div>
            <div className="topTracks">
              <div className="title">
                <h1>Top Tracks of All Time</h1>
                <button onClick={() => navigate("/profile/topTracks")}>See more</button>
              </div>
              {userState.topTracks.items.map((track: any, index: number) => {
                return (
                  <ProfileCard
                    type="track"
                    item={track}
                    key={`t${index}`}
                    onClick={() => goTo(track.external_urls.spotify)}
                  />
                );
              })}
            </div>
          </>
        )}
      </Content>
    </Container>
  );
}

export default ProfileContent;
