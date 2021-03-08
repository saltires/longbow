import { commonInterface } from "./common";
import { cookieInterface } from "./cookie";
import { dateInterface } from "./date";
import { deviceInterface } from "./device";
import { domInterface } from "./dom";
import { checkInterface } from "./regexp";
import { stringInterface } from "./string";
import { urlInterface } from "./url";
interface saltireUtilInterface
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
declare const saltireUtil: saltireUtilInterface;
export default saltireUtil;
