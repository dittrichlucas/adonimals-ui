"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const style_1 = require("./style");
const Title = (props) => {
    const { children, element, variant, ...other } = props;
    const elementType = element || style_1.defaultElement[variant];
    const Component = style_1.titleMap[elementType];
    return (react_1.default.createElement(Component, { variant: variant, ...other }, children));
};
exports.default = Title;
//# sourceMappingURL=index.js.map