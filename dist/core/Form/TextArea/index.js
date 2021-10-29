"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Text_1 = __importDefault(require("../../Text"));
const style_1 = require("../TextField/style");
const style_2 = require("./style");
const TextArea = (props) => {
    const { id, value, placeholder, label, disabled, required, wrap, cols, rows, onChange } = props;
    return (react_1.default.createElement(style_1.StyledBox, Object.assign({ display: 'flex', flexDirection: 'column' }, props),
        react_1.default.createElement(Text_1.default, { color: 'inherit', variant: 'medium', element: 'label', htmlFor: id }, label),
        react_1.default.createElement(style_2.StyledTextArea, { id: id, value: value, onChange: onChange, placeholder: placeholder, disabled: disabled, required: required, wrap: wrap, cols: cols, rows: rows })));
};
exports.default = TextArea;
//# sourceMappingURL=index.js.map