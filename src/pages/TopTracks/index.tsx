import { memo, MutableRefObject, useEffect, useRef, useState } from "react";
import Chart from "../../components/Chart";
import Loading from "../../components/Loading";
import ProfileCard from "../../components/ProfileCard";
import api from "../../services/spotify.api";
import { extendUser, useUser } from "../../store/user/user.slice";
import { Container, Content, TopImage } from "./styles";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { baseTheme } from "../../styles/theme";

function TopTracks() {
  const { userState, dispatch } = useUser();
  const [current, setCurrent] = useState({} as typeof userState.topTracks.items[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [playing, setPlaying] = useState({ URL: "", state: false } as any);

  function fetchTracks(term: string) {
    setIsLoading(true);
    setPlaying({ ...playing, state: false });
    api
      .get(`/me/top/tracks?time_range=${term}`)
      .then((res) => dispatch(extendUser({ topTracks: res.data })))
      .then((_) => setIsLoading(false));
    audio.current.pause();
  }

  function fetchTrackData(track: typeof userState.topTracks.items[0]) {
    setCurrent(track);
    setPlaying({ ...playing, url: track.previews_url });
    setPlaying({ state: false, URL: track.preview_url });
    api.get(`/audio-features/${track.id}`).then((res) => setCurrent({ ...track, audioFeatures: res.data }));
    audio.current.pause();
  }

  const audio: MutableRefObject<HTMLAudioElement> = useRef({} as HTMLAudioElement);

  useEffect(() => {
    setPlaying({ ...playing, url: current.url });
  }, [current]);

  return (
    <Container>
      <Content>
        <div className="list-header">
          <h6
            onClick={() => {
              fetchTracks("medium_term");
            }}
          >
            Recent
          </h6>
          <h6
            onClick={() => {
              fetchTracks("long_term");
            }}
          >
            Last 6 months
          </h6>
          <h6
            onClick={() => {
              fetchTracks("short_term");
            }}
          >
            Last 4 weeks
          </h6>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {userState.topTracks.items.map((track: any, index: number) => {
              return (
                <ProfileCard
                  type="track"
                  item={track}
                  key={`a${index}`}
                  onClick={() => {
                    fetchTrackData(track);
                  }}
                />
              );
            })}
          </>
        )}
      </Content>
      <Content>
        {isLoading ? (
          <></>
        ) : (
          <>
            {Object.keys(current).length !== 0 && (
              <div className="curTrack">
                <TopImage
                  src={current.album.images[0].url}
                  onClick={
                    playing.state
                      ? () => {
                          audio.current.load();
                          audio.current.pause();
                          setPlaying({ ...playing, state: false });
                        }
                      : () => {
                          audio.current.load();
                          audio.current.play();
                          setPlaying({ ...playing, state: true });
                        }
                  }
                >
                  {playing.state ? (
                    <AiFillPauseCircle color={baseTheme.colors.accent} />
                  ) : (
                    <AiFillPlayCircle color={baseTheme.colors.accent} />
                  )}
                  <audio ref={audio}>
                    <source src={playing.URL} />
                  </audio>
                </TopImage>
                <div>
                  <h2>
                    {current.name} - {current.artists[0].name}
                  </h2>
                  <span>
                    {current.album && current.album.name} {current.album && current.album.release_date.slice(0, 4)}
                  </span>
                </div>
              </div>
            )}
          </>
        )}
        <div className="trackInfo">
          {isLoading ? (
            <Loading />
          ) : (
            !!current.audioFeatures && (
              <Chart
                data={{
                  acousticness: current.audioFeatures.acousticness,
                  danceability: current.audioFeatures.danceability,
                  energy: current.audioFeatures.energy,
                  instrumentalness: current.audioFeatures.instrumentalness,
                  liveness: current.audioFeatures.liveness,
                  speechiness: current.audioFeatures.speechiness,
                  valence: current.audioFeatures.valence,
                }}
              />
            )
          )}
        </div>
      </Content>
    </Container>
  );
}

export default TopTracks;
