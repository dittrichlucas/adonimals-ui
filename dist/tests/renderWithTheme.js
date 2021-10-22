"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderWithTheme = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const __1 = require("..");
const defaultTheme_1 = __importDefault(require("../theme/defaultTheme"));
// TODO: Usar screen ao invés de render
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const renderWithTheme = (children) => {
    return (0, react_2.render)(react_1.default.createElement(__1.ThemeProvider, { theme: defaultTheme_1.default }, children));
};
exports.renderWithTheme = renderWithTheme;
//# sourceMappingURL=renderWithTheme.js.map