import { common } from "./common/index";
import { cookie } from "./cookie/index";
import { date } from "./date/index";
import { device } from "./device/index";
import { dom } from "./dom/index";
import { check } from "./regexp/index";
import { str } from "./string/index";
import { url } from "./url/index";
import { name, version } from "../package.json";
const saltireUtil = Object.assign({ name, version }, cookie, common, date, device, dom, check, str, url);
export default saltireUtil;