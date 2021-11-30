"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTextField = exports.StyledBox = exports.colorUnion = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Box = _interopRequireDefault(require("../../Box"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _excluded = ["theme"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var colorUnion = function colorUnion(props) {
  if (props.error) {
    return 'error';
  }

  if (props.disabled) {
    return 'disabled';
  }

  return props.color;
};

exports.colorUnion = colorUnion;
var StyledBox = (0, _styledComponents["default"])(_Box["default"])(function (_ref) {
  var theme = _ref.theme,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _objectSpread(_objectSpread(_objectSpread({
    padding: theme.space['spacing-xxs'],
    paddingLeft: theme.space['spacing-xs'],
    paddingRight: theme.space['spacing-xs'],
    borderRadius: theme.radii[4]
  }, (0, _styledSystem.space)(_objectSpread({
    theme: theme
  }, props))), (0, _styledSystem.variant)({
    prop: 'color',
    variants: {
      error: {
        color: theme.colors.feedback.error['120'],
        borderColor: theme.colors.feedback.error['120']
      },
      disabled: {
        color: theme.colors.greyscale['050'],
        borderColor: theme.colors.greyscale['050']
      },
      "default": {
        color: theme.colors.greyscale['000'],
        borderColor: theme.colors.greyscale['025']
      },
      primary: {
        color: theme.colors.primary['120'],
        borderColor: theme.colors.primary['120']
      },
      secondary: {
        color: theme.colors.secondary['120'],
        borderColor: theme.colors.secondary['120']
      }
    }
  })(_objectSpread(_objectSpread({
    theme: theme
  }, props), {}, {
    color: colorUnion(props)
  }))), (0, _styledSystem.variant)({
    variants: {
      outlined: {
        backgroundColor: 'transparent',
        borderWidth: theme.radii[2],
        borderStyle: 'solid'
      },
      text: {
        borderWidth: theme.radii[0],
        backgroundColor: theme.colors.greyscale['075'],
        borderBottomWidth: theme.radii[2],
        borderStyle: 'solid'
      }
    }
  })(_objectSpread({
    theme: theme
  }, props)));
});
exports.StyledBox = StyledBox;
var StyledTextField = (0, _styledComponents["default"])('input')(function (_ref2) {
  var theme = _ref2.theme;
  return {
    fontFamily: theme.fonts.fontFamily,
    borderRadius: '5px',
    fontSize: theme.fontSizes[16],
    color: theme.colors.greyscale['025'],
    background: 'none',
    border: 'none',
    outline: 'none',
    flex: 1
  };
});
exports.StyledTextField = StyledTextField;