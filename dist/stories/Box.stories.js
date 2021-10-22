"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
const react_1 = __importDefault(require("react"));
const Box_1 = __importDefault(require("../core/Box"));
exports.default = {
    title: 'Example/Box',
    component: Box_1.default,
    argTypes: {
        flexDirection: {
            control: {
                type: 'select',
                options: ['row', 'row-reverse', 'column', 'column-reverse']
            }
        },
        flexWrap: {
            control: {
                type: 'select',
                options: ['no-wrap', 'wrap', 'wrap-reverse']
            }
        },
        alignItems: {
            control: {
                type: 'select',
                options: [
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline',
                    'first baseline',
                    'last baseline',
                    'start',
                    'end',
                    'self-start',
                    'self-end'
                ]
            }
        },
        alignContent: {
            control: {
                type: 'select',
                options: [
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline',
                    'first baseline',
                    'last baseline',
                    'start',
                    'end',
                    'space-between',
                    'space-around',
                    'space-evenly'
                ]
            }
        },
        alignSelf: {
            control: {
                type: 'select',
                options: ['auto', 'stretch', 'flex-start', 'flex-end', 'center', 'baseline']
            }
        },
        justifyContent: {
            control: {
                type: 'select',
                options: [
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'start',
                    'end',
                    'left',
                    'right',
                    'space-between',
                    'space-around',
                    'space-evenly'
                ]
            }
        }
    }
};
const Template = args => (react_1.default.createElement(Box_1.default, { ...args },
    react_1.default.createElement("div", { style: { padding: 12, backgroundColor: 'inherit', color: 'white' } }, "Item 1"),
    react_1.default.createElement("div", { style: { padding: 12, backgroundColor: 'inherit', color: 'white' } }, "Item 2"),
    react_1.default.createElement("div", { style: { padding: 12, backgroundColor: 'inherit', color: 'white' } }, "Item 3")));
exports.Heading = Template.bind({});
exports.Heading.args = {
    display: 'flex',
    element: 'div',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'palevioletred'
};
//# sourceMappingURL=Box.stories.js.map