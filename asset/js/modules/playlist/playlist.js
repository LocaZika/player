import htmlTags from "../htmlTags.mjs";
import list from "./list.js";
export default () => {
  const playlist = htmlTags.ulTag("playlist glass");
  list(playlist);
  return playlist;
};
