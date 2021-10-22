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
        (0, renderWithTheme_1.renderWithTheme)(react_1.default.createElement(_1.default, { src: '', label: 'Username', alt: '' }));
        const test = dom_1.screen.getByText('U');
        expect(test.tagName).toBe('SPAN');
    });
});
//# sourceMappingURL=Avatar.test.js.map