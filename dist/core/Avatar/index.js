"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Text = _interopRequireDefault(require("../Text"));

var _style = require("./style");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Avatar = function Avatar(props) {
  var src = props.src,
      alt = props.alt,
      label = props.label;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      hasError = _useState2[0],
      setHasError = _useState2[1];

  var firstLetter = label === null || label === void 0 ? void 0 : label.charAt(0);
  (0, _react.useEffect)(function () {
    setHasError(false);
  }, [src]);

  if (src && !hasError) {
    return /*#__PURE__*/_react["default"].createElement(_style.StyledAvatarImage, {
      src: src,
      alt: alt,
      onError: function onError() {
        return setHasError(true);
      }
    });
  }

  return /*#__PURE__*/_react["default"].createElement(_style.StyledAvatarBox, {
    src: src,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, firstLetter && /*#__PURE__*/_react["default"].createElement(_Text["default"], {
    variant: "large",
    element: "span",
    color: "inherit"
  }, firstLetter));
};

var _default = Avatar;
exports["default"] = _default;