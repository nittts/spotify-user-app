import { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Loading from "../../components/Loading";
import Menu from "../../components/Menu";
import api, { refreshUser } from "../../services/spotify.api";
import { extendUser, useUser } from "../../store/user/user.slice";
import { Container, Content } from "./styles";

interface ContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const { dispatch } = useUser();

  const FetchTop = async () => {
    await api.get("/me/top/artists").then((res) => dispatch(extendUser({ topArtists: res.data })));
    await api.get("/me/top/tracks").then((res) => dispatch(extendUser({ topTracks: res.data })));
    await api.get("/me/following?type=artist").then((res) => dispatch(extendUser({ following: res.data })));
    await api.get("/me/playlists").then((res) => dispatch(extendUser({ playlists: res.data })));
  };

  useEffect(() => {
    FetchTop()
      .then((_) => setIsLoading(false))
      .catch((_) => {
        refreshUser();
      });
  }, []);

  return (
    <Container>
      <Menu />
      <Content>{isLoading ? <Loading /> : <Outlet context={{ isLoading, setIsLoading }} />}</Content>
    </Container>
  );
}

export function useLoading() {
  return useOutletContext<ContextType>();
}

export default Profile;
