"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _defaultTheme = _interopRequireDefault(require("./defaultTheme"));

var ThemeProvider = function ThemeProvider(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  var themeValue = theme || _defaultTheme["default"];
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: themeValue
  }, children);
};

var _default = ThemeProvider;
exports["default"] = _default;