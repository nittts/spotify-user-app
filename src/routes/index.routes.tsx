import Callback from "../pages/Callback";
import { Route, Routes } from "react-router-dom";
import Application from "../pages";
import Profile from "../pages/Profile";
import TopArtists from "../pages/TopArtists";
import TopTracks from "../pages/TopTracks";
import Playlists from "../pages/Playlists";
import Recent from "../pages/Recent";
import ProfileContent from "../pages/Profile/Content/content";

function Routing() {
  return (
    <Routes>
      <Route path="" element={<Application />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/profile" element={<Profile />}>
        <Route path="" element={<ProfileContent />} />
        <Route path="/profile/topArtists" element={<TopArtists />} />
        <Route path="/profile/topTracks" element={<TopTracks />} />
        <Route path="/profile/playlists" element={<Playlists />} />
        <Route path="/profile/recent" element={<Recent />} />
      </Route>
    </Routes>
  );
}

export default Routing;
