"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boxMap = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var createBox = function createBox(element) {
  return (0, _styledComponents["default"])(element)(function (props) {
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0, _styledSystem.border)(props)), (0, _styledSystem.boxShadow)(props)), (0, _styledSystem.space)(props)), (0, _styledSystem.layout)(props)), (0, _styledSystem.flexbox)(props)), (0, _styledSystem.color)(props));
  });
};

var Header = createBox('header');
var Nav = createBox('nav');
var Section = createBox('section');
var Article = createBox('article');
var Aside = createBox('aside');
var Footer = createBox('footer');
var Details = createBox('details');
var Summary = createBox('summary');
var Div = createBox('div');
var boxMap = {
  header: Header,
  nav: Nav,
  section: Section,
  article: Article,
  aside: Aside,
  footer: Footer,
  details: Details,
  summary: Summary,
  div: Div
};
exports.boxMap = boxMap;