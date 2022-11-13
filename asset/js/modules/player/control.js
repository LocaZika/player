import htmlTags from "../htmlTags.mjs";
import volumeRange from "./volumeRange.js";

export default () => {
  const nextIcon = '<i class="fa-solid fa-forward-step"></i>';
  const prevIcon = '<i class="fa-solid fa-backward-step"></i>';
  const playIcon = '<i class="fa-solid fa-play icon-play"></i>';
  const pauseIcon = '<i class="fa-solid fa-pause icon-pause"></i>';
  const nextBtn = htmlTags.buttonTag("nextBtn", nextIcon);
  const prevBtn = htmlTags.buttonTag("prevBtn", prevIcon);
  const playBtn = htmlTags.divTag("", "playControl");
  playBtn.innerHTML = playIcon + pauseIcon;
  const control = htmlTags.divTag("", "control", prevBtn, playBtn, nextBtn, volumeRange());
  return control;
};
