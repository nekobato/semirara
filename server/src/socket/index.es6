const debug = require("debug")("semirara:socket");

import page from "./page";
import list from "./pagelist";

export function use(app){

  page(app);
  list(app);

}
