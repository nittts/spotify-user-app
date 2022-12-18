import axios from "axios";
const data = JSON.parse(localStorage.getItem("@SpotifyToken") as string);

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${data && data.access_token}`,
  },
});

export function generateRandomString(num: number) {
  let str = "";
  const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  while (str.length <= num) {
    str += dict.charAt(Math.floor(Math.random() * dict.length));
  }

  return str;
}

export const requestUserAuthorization = () => {
  const state = generateRandomString(16);
  const scope =
    "user-read-private user-read-email user-top-read playlist-read-private playlist-read-collaborative user-follow-read user-read-recently-played user-library-read";

  window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&scope=${scope}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&state=${state}`;
};

export const requestAccessToken = async (search: string) => {
  const params = Object.fromEntries(new URLSearchParams(search).entries());

  const authHeaders = btoa(import.meta.env.VITE_CLIENT_ID + ":" + import.meta.env.VITE_CLIENT_SECRET);

  await axios
    .post(
      "https://accounts.spotify.com/api/token",
      {
        code: params.code,
        redirect_uri: import.meta.env.VITE_REDIRECT_URI,
        grant_type: "authorization_code",
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${authHeaders}`,
        },
      }
    )
    .then((response) => localStorage.setItem("@SpotifyToken", JSON.stringify(response.data)));

  window.location.href = import.meta.env.VITE_BASE_URL;
};

export const refreshUser = () => {
  localStorage.removeItem("@SpotifyToken");
  localStorage.removeItem("@SpotifyUser");
  requestUserAuthorization();
  requestAccessToken(window.location.search);
};

export default api;
