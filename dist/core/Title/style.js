"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleMap = exports.defaultElement = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _excluded = ["theme"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var createTitle = function createTitle(element) {
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
        heading1: {
          fontSize: theme.fontSizes[64],
          lineHeight: theme.lineHeights[72]
        },
        heading2: {
          fontSize: theme.fontSizes[56],
          lineHeight: theme.lineHeights[64]
        },
        heading3: {
          fontSize: theme.fontSizes[48],
          lineHeight: theme.lineHeights[56]
        },
        heading4: {
          fontSize: theme.fontSizes[40],
          lineHeight: theme.lineHeights[48]
        },
        heading5: {
          fontSize: theme.fontSizes[32],
          lineHeight: theme.lineHeights[40]
        },
        heading6: {
          fontSize: theme.fontSizes[24],
          lineHeight: theme.lineHeights[32]
        }
      }
    })(_objectSpread({
      theme: theme
    }, props)));
  });
};

var Heading1 = createTitle('h1');
var Heading2 = createTitle('h2');
var Heading3 = createTitle('h3');
var Heading4 = createTitle('h4');
var Heading5 = createTitle('h5');
var Heading6 = createTitle('h6');
var defaultElement = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  heading6: 'h6'
};
exports.defaultElement = defaultElement;
var titleMap = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6
};
exports.titleMap = titleMap;