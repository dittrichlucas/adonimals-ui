"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = void 0;

var _react = require("react");

var _styledComponents = require("styled-components");

var useTheme = function useTheme() {
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);
  return {
    theme: theme
  };
};

exports.useTheme = useTheme;