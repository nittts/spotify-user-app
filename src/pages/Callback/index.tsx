import { requestAccessToken } from "../../services/spotify.api";
import Loading from "../../components/Loading";
import { Container } from "./styles";
import { useEffect } from "react";

function callback() {
  useEffect(() => {
    requestAccessToken(window.location.search);
  }, []);

  return (
    <Container>
      <Loading />
    </Container>
  );
}

export default callback;
