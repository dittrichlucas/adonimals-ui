"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const react_1 = __importDefault(require("react"));
const Avatar_1 = __importDefault(require("../core/Avatar"));
exports.default = {
    title: 'Example/Avatar',
    component: Avatar_1.default
};
const Template = args => react_1.default.createElement(Avatar_1.default, { ...args });
exports.Image = Template.bind({});
exports.Image.args = {
    label: 'Username'
};
//# sourceMappingURL=Avatar.stories.js.map