"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const react_1 = __importDefault(require("react"));
const TextArea_1 = __importDefault(require("../core/Form/TextArea"));
exports.default = {
    title: 'Example/TextArea',
    component: TextArea_1.default,
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: ['default', 'primary', 'secondary']
            }
        },
        variant: {
            control: {
                type: 'select',
                options: ['outlined', 'text']
            }
        }
    }
};
const Template = args => react_1.default.createElement(TextArea_1.default, { ...args });
exports.Input = Template.bind({});
exports.Input.args = {
    value: '',
    color: 'primary',
    placeholder: 'Email'
};
//# sourceMappingURL=TextArea.stories.js.map