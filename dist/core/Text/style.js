"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textMap = exports.defaultElement = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _excluded = ["theme"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var createText = function createText(element) {
  return (0, _styledComponents["default"])(element)(function (_ref) {
    var theme = _ref.theme,
        props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
    return _objectSpread(_objectSpread(_objectSpread({
      fontFamily: theme.fonts.fontFamily,
      color: theme.colors.greyscale['000']
    }, (0, _styledSystem.space)(_objectSpread({
      theme: theme
    }, props))), (0, _styledSystem.color)(_objectSpread({
      theme: theme
    }, props))), (0, _styledSystem.variant)({
      variants: {
        large: {
          fontSize: theme.fontSizes[20],
          lineHeight: theme.lineHeights[24]
        },
        medium: {
          fontSize: theme.fontSizes[16],
          lineHeight: theme.lineHeights[20]
        },
        small: {
          fontSize: theme.fontSizes[12],
          lineHeight: theme.lineHeights[16]
        }
      }
    })(_objectSpread({
      theme: theme
    }, props)));
  });
};

var Caption = createText('caption');
var Label = createText('label');
var Paragraph = createText('p');
var Span = createText('span');
var defaultElement = {
  large: 'p',
  medium: 'span',
  small: 'span'
};
exports.defaultElement = defaultElement;
var textMap = {
  caption: Caption,
  label: Label,
  p: Paragraph,
  span: Span
};
exports.textMap = textMap;