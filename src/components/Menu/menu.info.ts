import { FaUserAlt, FaHistory } from "react-icons/fa";
import { BsFillMicFill, BsMusicNoteBeamed } from "react-icons/bs";
import { TbPlaylist } from "react-icons/tb";

export default [
  { title: "Profile", path: "/profile", icon: FaUserAlt },
  { title: "Top Artists", path: "/profile/topArtists", icon: BsFillMicFill },
  { title: "Top Tracks", path: "/profile/topTracks", icon: BsMusicNoteBeamed },
  { title: "Recent", path: "/profile/recent", icon: FaHistory },
  { title: "Playlists", path: "/profile/playlists", icon: TbPlaylist },
];
