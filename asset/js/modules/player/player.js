import htmlTags from "../htmlTags.mjs";
import control from "./control.js";
import imgSong from "./imgSong.js";
import timeRange from "./timeRange.js";
import titleSong from "./titleSong.js";
export default () => {
  const img = imgSong;
  const title = titleSong;
  const ctrl = control;
  const timeR = timeRange;
  const audio = new Audio();
  audio.id = "audio";
  const player = htmlTags.divTag("", "player glass", audio, img(), title(), timeR(), ctrl());
  return player;
};
