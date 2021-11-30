"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTextArea = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var StyledTextArea = (0, _styledComponents["default"])('textarea')(function (_ref) {
  var theme = _ref.theme;
  return {
    fontFamily: theme.fonts.fontFamily,
    borderRadius: '5px',
    fontSize: theme.fontSizes[16],
    background: 'none',
    border: 'none',
    outline: 'none'
  };
});
exports.StyledTextArea = StyledTextArea;