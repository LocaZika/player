import htmlTags from "./modules/htmlTags.mjs";
import playlistMain from "./modules/playlist/playlistMain.js";
import title from "./modules/title/title.js";

const container = htmlTags.divTag("", "container", title(), playlistMain);
document.body.append(container);
