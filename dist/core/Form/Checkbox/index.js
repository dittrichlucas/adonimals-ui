"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("../../Box"));

var _Text = _interopRequireDefault(require("../../Text"));

var _style = require("./style");

var Checkbox = function Checkbox(props) {
  var id = props.id,
      label = props.label,
      checked = props.checked,
      onChange = props.onChange;
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_style.HiddenCheckbox, {
    id: id,
    name: id,
    checked: checked,
    onChange: onChange
  }), /*#__PURE__*/_react["default"].createElement(_style.StyledCheckbox, {
    checked: checked,
    onClick: onChange
  }, /*#__PURE__*/_react["default"].createElement(_style.Icon, {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/_react["default"].createElement(_Text["default"], {
    ml: "spacing-xxxs",
    htmlFor: id,
    element: "label",
    variant: "medium",
    color: "inherit"
  }, label));
};

var _default = Checkbox;
exports["default"] = _default;