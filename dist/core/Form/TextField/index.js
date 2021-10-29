"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const style_1 = require("./style");
const Text_1 = __importDefault(require("../../Text"));
const Box_1 = __importDefault(require("../../Box"));
const TextField = (props) => {
    const { id, value, type, onChange, placeholder, disabled, variant = 'text', color = 'default', error, prefix, suffix, label } = props;
    return (react_1.default.createElement(style_1.StyledBox, Object.assign({ display: 'flex', flexDirection: 'column' }, props),
        react_1.default.createElement(Text_1.default, { color: 'inherit', variant: 'medium', element: 'label', htmlFor: id }, label),
        react_1.default.createElement(Box_1.default, { display: 'flex', flexDirection: 'row', py: 'spacing-xxxs', alignItems: 'center' },
            prefix,
            react_1.default.createElement(style_1.StyledTextField, { id: id, value: value, type: type, onChange: onChange, placeholder: placeholder, disabled: disabled, variant: variant, color: color, error: error }),
            suffix)));
};
exports.default = TextField;
//# sourceMappingURL=index.js.map