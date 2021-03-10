import { common, commonInterface } from "./common/index";
import { cookie, cookieInterface } from "./cookie/index";
import { date, dateInterface } from "./date/index";
import { device, deviceInterface } from "./device/index";
import { dom, domInterface } from "./dom/index";
import { check, checkInterface } from "./regexp/index";
import { str, stringInterface } from "./string/index";
import { url, urlInterface } from "./url/index";
// import { name, version } from "../package.json";

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

const saltireUtil: saltireUtilInterface = Object.assign(
  { name: "saltire-util", version: "0.0.1" },
  cookie,
  common,
  date,
  device,
  dom,
  check,
  str,
  url
);

export default saltireUtil;
