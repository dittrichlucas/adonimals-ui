"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledAvatarImage = exports.StyledAvatarBox = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Box = _interopRequireDefault(require("../Box"));

var _excluded = ["theme"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StyledAvatarBox = (0, _styledComponents["default"])(_Box["default"])(function (_ref) {
  var theme = _ref.theme,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _objectSpread(_objectSpread({}, (0, _styledSystem.space)(_objectSpread({
    theme: theme
  }, props))), {}, {
    width: '50px',
    height: '50px',
    color: theme.colors.greyscale['100'],
    backgroundColor: theme.colors.greyscale['050'],
    borderRadius: '50%'
  });
});
exports.StyledAvatarBox = StyledAvatarBox;
var StyledAvatarImage = (0, _styledComponents["default"])('img')(function (props) {
  return _objectSpread(_objectSpread({}, (0, _styledSystem.space)(props)), {}, {
    width: '50px',
    height: '50px',
    borderRadius: '50%'
  });
});
exports.StyledAvatarImage = StyledAvatarImage;