import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import api, { requestUserAuthorization } from "../services/spotify.api";
import { saveUser, useUser } from "../store/user/user.slice";
import Box from "./index.styles";

export default function () {
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useUser();

  const token = localStorage.getItem("@SpotifyToken");
  const user = localStorage.getItem("@SpotifyUser");
  useEffect(() => {
    if (token) {
      if (!user) {
        api
          .get("/me")
          .then((res) => {
            localStorage.setItem("@SpotifyUser", JSON.stringify(res.data));
            dispatch(saveUser(res.data));
          })
          .catch((err) => console.log(err));
      }
    }
  }, [location]);

  return (
    <Box>
      <h1>Spotify User Profile</h1>
      <Button
        onClick={() => {
          user ? navigate("/profile") : requestUserAuthorization();
        }}
      >
        {user ? "Proceed" : "Authorize"}
      </Button>
    </Box>
  );
}
