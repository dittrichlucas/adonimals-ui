"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCheckbox = exports.HiddenCheckbox = exports.Icon = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Icon = (0, _styledComponents["default"])('svg')(function () {
  return {
    fill: 'none',
    stroke: 'white',
    strokeWidth: '2px'
  };
});
exports.Icon = Icon;
var HiddenCheckbox = (0, _styledComponents["default"])('input').attrs({
  type: 'chekbox'
})(function () {
  return {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };
});
exports.HiddenCheckbox = HiddenCheckbox;
var StyledCheckbox = (0, _styledComponents["default"])('div')(function (_ref) {
  var _ref2;

  var checked = _ref.checked,
      theme = _ref.theme;
  return _ref2 = {
    display: 'inline-block',
    width: theme.radii['16'],
    height: theme.radii['16'],
    background: checked ? theme.colors.primary['120'] : theme.colors.secondary['120'],
    borderRadius: theme.radii['4'],
    transition: 'all 150ms'
  }, (0, _defineProperty2["default"])(_ref2, "".concat(HiddenCheckbox, ":focus + &"), {
    boxShadow: "0 0 0 ".concat(theme.radii['4'], " ").concat(theme.colors.primary['110'])
  }), (0, _defineProperty2["default"])(_ref2, "".concat(Icon), {
    visibility: checked ? 'visible' : 'hidden'
  }), _ref2;
});
exports.StyledCheckbox = StyledCheckbox;