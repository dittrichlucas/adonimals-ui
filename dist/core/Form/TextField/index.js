"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var _Text = _interopRequireDefault(require("../../Text"));

var _Box = _interopRequireDefault(require("../../Box"));

var TextField = function TextField(props) {
  var id = props.id,
      value = props.value,
      type = props.type,
      onChange = props.onChange,
      placeholder = props.placeholder,
      disabled = props.disabled,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      error = props.error,
      prefix = props.prefix,
      suffix = props.suffix,
      label = props.label;
  return /*#__PURE__*/_react["default"].createElement(_style.StyledBox, (0, _extends2["default"])({
    display: "flex",
    flexDirection: "column"
  }, props), /*#__PURE__*/_react["default"].createElement(_Text["default"], {
    color: "inherit",
    variant: "medium",
    element: "label",
    htmlFor: id
  }, label), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "flex",
    flexDirection: "row",
    py: "spacing-xxxs",
    alignItems: "center"
  }, prefix, /*#__PURE__*/_react["default"].createElement(_style.StyledTextField, {
    id: id,
    value: value,
    type: type,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    variant: variant,
    color: color,
    error: error
  }), suffix));
};

var _default = TextField;
exports["default"] = _default;