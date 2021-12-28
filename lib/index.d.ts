import { commonInterface } from "./common/index";
import { cookieInterface } from "./cookie/index";
import { dateInterface } from "./date/index";
import { deviceInterface } from "./device/index";
import { domInterface } from "./dom/index";
import { checkInterface } from "./regexp/index";
import { stringInterface } from "./string/index";
import { urlInterface } from "./url/index";
interface longbowInterface
  extends commonInterface,
    cookieInterface,
    dateInterface,
    deviceInterface,
    domInterface,
    checkInterface,
    stringInterface,
    urlInterface {
  version: string;
  name: string;
}
declare const longbow: longbowInterface;
export default longbow;
