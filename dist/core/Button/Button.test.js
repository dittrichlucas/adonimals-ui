"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const renderWithTheme_1 = require("../../tests/renderWithTheme");
const _1 = __importDefault(require("."));
const dom_1 = require("@testing-library/dom");
describe('', () => {
    test('', () => {
        (0, renderWithTheme_1.renderWithTheme)(react_1.default.createElement(_1.default, { variant: 'contained', size: 'medium', backgroundColor: '#000', color: 'primary', disabled: false }, "Button"));
        const test = dom_1.screen.getByRole('button', { name: 'Button' });
        expect(test.tagName).toBe('BUTTON');
    });
});
//# sourceMappingURL=Button.test.js.map