import htmltags from "../htmlTags.mjs";
export default () => {
  const volumeBtn = htmltags.buttonTag(
    "volumeBtn",
    '<i class="fa-solid fa-volume-high volumeup"></i><i class="fa-solid fa-volume-xmark mute"></i>'
  );
  const volumeRange = htmltags.inputTag("range", "volumeRange");
  volumeRange.min = 0;
  volumeRange.max = 100;
  const volume = htmltags.divTag("", "volume", volumeRange, volumeBtn);
  return volume;
};
