"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("../../Text"));

var _style = require("../TextField/style");

var _style2 = require("./style");

var TextArea = function TextArea(props) {
  var id = props.id,
      value = props.value,
      placeholder = props.placeholder,
      label = props.label,
      disabled = props.disabled,
      required = props.required,
      wrap = props.wrap,
      cols = props.cols,
      rows = props.rows,
      onChange = props.onChange;
  return /*#__PURE__*/_react["default"].createElement(_style.StyledBox, (0, _extends2["default"])({
    display: "flex",
    flexDirection: "column"
  }, props), /*#__PURE__*/_react["default"].createElement(_Text["default"], {
    color: "inherit",
    variant: "medium",
    element: "label",
    htmlFor: id
  }, label), /*#__PURE__*/_react["default"].createElement(_style2.StyledTextArea, {
    id: id,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    wrap: wrap,
    cols: cols,
    rows: rows
  }));
};

var _default = TextArea;
exports["default"] = _default;