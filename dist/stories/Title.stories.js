"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
const react_1 = __importDefault(require("react"));
const Title_1 = __importDefault(require("../core/Title"));
exports.default = {
    title: 'Example/Title',
    component: Title_1.default,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6']
            }
        },
        element: {
            control: {
                type: 'select',
                options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
            }
        }
    }
};
const Template = args => react_1.default.createElement(Title_1.default, { ...args });
exports.Heading = Template.bind({});
exports.Heading.args = {
    children: 'Title',
    variant: 'heading1',
    element: 'h1'
};
//# sourceMappingURL=Title.stories.js.map