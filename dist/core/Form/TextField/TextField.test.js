"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dom_1 = require("@testing-library/dom");
const react_1 = __importDefault(require("react"));
const _1 = __importDefault(require("."));
const renderWithTheme_1 = require("../../../tests/renderWithTheme");
describe('', () => {
    test('', () => {
        (0, renderWithTheme_1.renderWithTheme)(react_1.default.createElement(_1.default, { variant: 'outlined', color: 'default', placeholder: 'Test', value: 'Test 1', onChange: () => { return; } }));
        const test = dom_1.screen.getByDisplayValue('Test 1');
        expect(test.tagName).toBe('INPUT');
    });
});
//# sourceMappingURL=TextField.test.js.map