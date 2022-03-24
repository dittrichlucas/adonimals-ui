"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("../core/Button"));
exports.default = {
    title: 'Example/Button',
    component: Button_1.default,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['contained', 'outlined', 'text']
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        }
    }
};
const TemplateRow = args => (react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } },
    react_1.default.createElement(Button_1.default, { ...args, size: 'small' }, "Button"),
    react_1.default.createElement(Button_1.default, { ...args, size: 'medium' }, "Button"),
    react_1.default.createElement(Button_1.default, { ...args, size: 'large' }, "Button")));
exports.Default = TemplateRow.bind({});
exports.Default.args = {
    children: 'Button',
    variant: 'outlined'
};
//# sourceMappingURL=Button.stories.js.map