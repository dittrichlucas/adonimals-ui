"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTextArea = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledTextArea = (0, styled_components_1.default)('textarea')(({ theme }) => ({
    fontFamily: theme.fonts.fontFamily,
    borderRadius: '5px',
    fontSize: theme.fontSizes[16],
    background: 'none',
    border: 'none',
    outline: 'none'
}));
//# sourceMappingURL=style.js.map