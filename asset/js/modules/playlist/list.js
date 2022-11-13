import getData from "./getData.js";
import htmlTags from "../htmlTags.mjs";
const list = (playlist) =>
  getData("listSong.json").then((songs) => {
    songs.list.forEach(({ name: nameSong, singer, path, imgSong }) => {
      const img = htmlTags.imgTag(`./asset/img/${imgSong}`);
      const span = htmlTags.spanTag(`${nameSong} / ${singer}`);
      const li = htmlTags.liTag(img, span);
      li.setAttribute("data-src", path);
      playlist.append(li);
    });
  });
export default list;
