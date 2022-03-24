"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const Button = (props) => {
    const { children, ...other } = props;
    return (react_1.default.createElement(styles_1.StyledButton, { ...other }, children));
};
exports.default = Button;
//# sourceMappingURL=index.js.map