"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Box_1 = __importDefault(require("../../Box"));
const Text_1 = __importDefault(require("../../Text"));
const style_1 = require("./style");
const Checkbox = (props) => {
    const { id, label, checked, onChange } = props;
    return (react_1.default.createElement(Box_1.default, { display: 'flex', alignItems: 'center' },
        react_1.default.createElement(style_1.HiddenCheckbox, { id: id, name: id, checked: checked, onChange: onChange }),
        react_1.default.createElement(style_1.StyledCheckbox, { checked: checked, onClick: onChange },
            react_1.default.createElement(style_1.Icon, { viewBox: "0 0 24 24" },
                react_1.default.createElement("polyline", { points: "20 6 9 17 4 12" }))),
        react_1.default.createElement(Text_1.default, { ml: 'spacing-xxxs', htmlFor: id, element: 'label', variant: 'medium', color: 'inherit' }, label)));
};
exports.default = Checkbox;
//# sourceMappingURL=index.js.map