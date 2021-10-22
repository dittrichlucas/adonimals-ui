"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleMap = exports.defaultElement = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const createTitle = (element) => (0, styled_components_1.default)(element)(({ theme, ...props }) => ({
    fontFamily: theme.fonts.fontFamily,
    color: theme.colors.greyscale['000'],
    ...(0, styled_system_1.space)({ theme, ...props }),
    ...(0, styled_system_1.color)({ theme, ...props }),
    ...(0, styled_system_1.variant)({
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
    })({ theme, ...props })
}));
const Heading1 = createTitle('h1');
const Heading2 = createTitle('h2');
const Heading3 = createTitle('h3');
const Heading4 = createTitle('h4');
const Heading5 = createTitle('h5');
const Heading6 = createTitle('h6');
exports.defaultElement = {
    heading1: 'h1',
    heading2: 'h2',
    heading3: 'h3',
    heading4: 'h4',
    heading5: 'h5',
    heading6: 'h6'
};
exports.titleMap = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    h6: Heading6
};
//# sourceMappingURL=style.js.map