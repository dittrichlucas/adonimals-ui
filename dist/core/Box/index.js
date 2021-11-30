"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var _excluded = ["children", "element"];

var Box = function Box(props) {
  var children = props.children,
      _props$element = props.element,
      element = _props$element === void 0 ? 'div' : _props$element,
      others = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var Component = _style.boxMap[element];
  return /*#__PURE__*/_react["default"].createElement(Component, others, children);
};

var _default = Box;
exports["default"] = _default;