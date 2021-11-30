"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _excluded = ["theme"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StyledButton = (0, _styledComponents["default"])('button')(function (_ref) {
  var theme = _ref.theme,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({
    fontFamily: theme.fonts.fontFamily,
    borderRadius: '5px',
    fontSize: theme.fontSizes[16],
    fontWeight: 'bold',
    cursor: 'pointer',
    borderWidth: theme.radii[2],
    borderStyle: 'solid'
  }, (0, _styledSystem.layout)(_objectSpread({
    theme: theme
  }, props))), (0, _styledSystem.space)(_objectSpread({
    theme: theme
  }, props))), (0, _styledSystem.variant)({
    prop: 'size',
    variants: {
      small: {
        paddingTop: theme.space['spacing-xs'],
        paddingBottom: theme.space['spacing-xs'],
        paddingLeft: theme.space['spacing-lg'],
        paddingRight: theme.space['spacing-lg']
      },
      medium: {
        paddingTop: theme.space['spacing-sm'],
        paddingBottom: theme.space['spacing-sm'],
        paddingLeft: theme.space['spacing-xxl'],
        paddingRight: theme.space['spacing-xxl']
      },
      large: {
        paddingTop: theme.space['spacing-md'],
        paddingBottom: theme.space['spacing-md'],
        paddingLeft: theme.space['spacing-xxxl'],
        paddingRight: theme.space['spacing-xxxl']
      }
    }
  })(_objectSpread({
    theme: theme
  }, props))), (0, _styledSystem.variant)({
    variants: {
      contained: {
        color: theme.colors.secondary['080'],
        backgroundColor: theme.colors.primary['120'],
        boxShadow: '',
        borderColor: theme.colors.transparent
      },
      outlined: {
        color: theme.colors.primary['120'],
        backgroundColor: theme.colors.secondary['080'],
        boxShadow: '',
        borderColor: theme.colors.primary['120']
      },
      text: {
        color: theme.colors.primary['120'],
        backgroundColor: theme.colors.secondary['080'],
        boxShadow: '',
        borderColor: theme.colors.secondary['080']
      }
    }
  })(_objectSpread({
    theme: theme
  }, props)));
});
exports.StyledButton = StyledButton;