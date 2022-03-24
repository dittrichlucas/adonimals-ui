"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const Text_1 = __importDefault(require("../core/Text"));
exports.default = {
    title: 'Example/Text',
    component: Text_1.default,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['large', 'medium', 'small']
            }
        },
        element: {
            control: {
                type: 'select',
                options: ['caption', 'label', 'p', 'span']
            }
        }
    }
};
const Template = args => react_1.default.createElement(Text_1.default, { ...args });
exports.Default = Template.bind({});
exports.Default.args = {
    children: 'Text',
    variant: 'large',
    element: 'p'
};
//# sourceMappingURL=Text.stories.js.map