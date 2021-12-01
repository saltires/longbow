import { common, commonInterface } from "./common/index";
import { cookie, cookieInterface } from "./cookie/index";
import { date, dateInterface } from "./date/index";
import { device, deviceInterface } from "./device/index";
import { dom, domInterface } from "./dom/index";
import { check, checkInterface } from "./regexp/index";
import { str, stringInterface } from "./string/index";
import { url, urlInterface } from "./url/index";
import { name, version } from "../package.json";

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

const longbow: longbowInterface = Object.assign(
  { name, version },
  cookie,
  common,
  date,
  device,
  dom,
  check,
  str,
  url
);

export default longbow;
