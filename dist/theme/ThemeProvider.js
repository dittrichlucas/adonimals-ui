"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = require("styled-components");
const defaultTheme_1 = __importDefault(require("./defaultTheme"));
const ThemeProvider = ({ theme, children }) => {
    const themeValue = theme || defaultTheme_1.default;
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: themeValue }, children));
};
exports.default = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map