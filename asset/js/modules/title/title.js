import htmlTags from "../htmlTags.mjs";
import playerMain from "../player/playerMain.js";
import getText from "./getText.js";
export default () => {
  const title = htmlTags.divTag("", "title glass");
  const wrap = htmlTags.divTag("", "wrap", title, playerMain);
  getText("music-playerSVG.txt").then((text) => {
    title.innerHTML = text;
  });
  return wrap;
};
