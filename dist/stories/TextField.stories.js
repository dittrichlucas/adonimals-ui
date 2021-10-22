"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const react_1 = __importDefault(require("react"));
const TextField_1 = __importDefault(require("../core/Form/TextField"));
exports.default = {
    title: 'Example/TextField',
    component: TextField_1.default,
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
const Template = args => react_1.default.createElement(TextField_1.default, { ...args });
exports.Input = Template.bind({});
exports.Input.args = {
    value: '',
    color: 'primary',
    type: 'text',
    placeholder: 'Email',
    variant: 'outlined'
};
//# sourceMappingURL=TextField.stories.js.map