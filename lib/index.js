"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("./common/index");

var _index2 = require("./cookie/index");

var _index3 = require("./date/index");

var _index4 = require("./device/index");

var _index5 = require("./dom/index");

var _index6 = require("./regexp/index");

var _index7 = require("./string/index");

var _index8 = require("./url/index");

var _package = require("../package.json");

var saltireUtil = Object.assign({
  name: _package.name,
  version: _package.version
}, _index2.cookie, _index.common, _index3.date, _index4.device, _index5.dom, _index6.check, _index7.str, _index8.url);
var _default = saltireUtil;
exports["default"] = _default;