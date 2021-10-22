"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const react_1 = __importDefault(require("react"));
const Checkbox_1 = __importDefault(require("../core/Form/Checkbox"));
exports.default = {
    title: 'Example/Checkbox',
    component: Checkbox_1.default
};
const Template = args => react_1.default.createElement(Checkbox_1.default, { ...args });
exports.Input = Template.bind({});
exports.Input.args = {
    label: 'Eu sou um checkbox funcionando'
};
//# sourceMappingURL=Checkbox.stories.js.map