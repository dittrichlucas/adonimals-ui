"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const style_1 = require("./style");
const Box = (props) => {
    const { children, element = 'div', ...others } = props;
    const Component = style_1.boxMap[element];
    return (react_1.default.createElement(Component, { ...others }, children));
};
exports.default = Box;
//# sourceMappingURL=index.js.map