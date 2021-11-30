"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var _excluded = ["children", "element", "variant"];

var Title = function Title(props) {
  var children = props.children,
      element = props.element,
      variant = props.variant,
      other = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var elementType = element || _style.defaultElement[variant];
  var Component = _style.titleMap[elementType];
  return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({
    variant: variant
  }, other), children);
};

var _default = Title;
exports["default"] = _default;