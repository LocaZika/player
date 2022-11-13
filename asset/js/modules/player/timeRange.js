import htmlTags from "../htmlTags.mjs";

export default () => {
  const seekBar = htmlTags.inputTag("range", "seekBar");
  seekBar.min = 0;
  seekBar.max = 100;
  seekBar.value = 0;
  const timeContent = htmlTags.spanTag();
  timeContent.id = "timeContent";
  timeContent.style.setProperty("--timeContent-left", "-1px");
  timeContent.innerText = "00:00";
  const timeRange = htmlTags.divTag("timeRange", "", timeContent, seekBar);
  return timeRange;
};
