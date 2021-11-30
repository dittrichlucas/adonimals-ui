"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledAvatarImage = exports.StyledAvatarBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

var StyledAvatarBox = (0, _styledComponents["default"])(_Box["default"])(function (_ref) {
  var theme = _ref.theme;
  return {
    width: '50px',
    height: '50px',
    color: theme.colors.greyscale['100'],
    backgroundColor: theme.colors.greyscale['050'],
    borderRadius: '50%'
  };
});
exports.StyledAvatarBox = StyledAvatarBox;
var StyledAvatarImage = (0, _styledComponents["default"])('img')(function () {
  return {
    width: '50px',
    height: '50px',
    borderRadius: '50%'
  };
});
exports.StyledAvatarImage = StyledAvatarImage;