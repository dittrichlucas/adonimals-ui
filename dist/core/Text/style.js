"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textMap = exports.defaultElement = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const createText = (element) => (0, styled_components_1.default)(element)((_a) => {
    var { theme } = _a, props = __rest(_a, ["theme"]);
    return (Object.assign(Object.assign(Object.assign({ fontFamily: theme.fonts.fontFamily, color: theme.colors.greyscale['000'] }, (0, styled_system_1.space)(Object.assign({ theme }, props))), (0, styled_system_1.color)(Object.assign({ theme }, props))), (0, styled_system_1.variant)({
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
    })(Object.assign({ theme }, props))));
});
const Caption = createText('caption');
const Label = createText('label');
const Paragraph = createText('p');
const Span = createText('span');
exports.defaultElement = {
    large: 'p',
    medium: 'span',
    small: 'span'
};
exports.textMap = {
    caption: Caption,
    label: Label,
    p: Paragraph,
    span: Span
};
//# sourceMappingURL=style.js.map