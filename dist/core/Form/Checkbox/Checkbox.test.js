"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dom_1 = require("@testing-library/dom");
const react_1 = __importDefault(require("react"));
const Checkbox_1 = __importDefault(require("../Checkbox"));
const renderWithTheme_1 = require("../../../tests/renderWithTheme");
describe('', () => {
    test('', () => {
        (0, renderWithTheme_1.renderWithTheme)(react_1.default.createElement(Checkbox_1.default, { label: 'Test', id: 'checkbox-test', checked: false, onChange: () => { return; } }));
        const test = dom_1.screen.getByLabelText(/Test/);
        expect(test.tagName).toBe('INPUT');
    });
});
//# sourceMappingURL=Checkbox.test.js.map