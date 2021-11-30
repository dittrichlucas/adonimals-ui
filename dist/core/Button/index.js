"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _excluded = ["children"];

var Button = function Button(props) {
  var children = props.children,
      other = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledButton, other, children);
};

var _default = Button;
exports["default"] = _default;