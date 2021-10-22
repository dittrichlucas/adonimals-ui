"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const renderWithTheme_1 = require("../../tests/renderWithTheme");
const _1 = __importDefault(require("."));
const react_2 = require("@testing-library/react");
describe('testing title component', () => {
    test('it should render an h1', () => {
        (0, renderWithTheme_1.renderWithTheme)(react_1.default.createElement(_1.default, { variant: 'heading1' }, "Teste H1"));
        const test = react_2.screen.getByRole('heading', { name: 'Teste H1' });
        expect(test.tagName).toBe('H1');
    });
});
//# sourceMappingURL=Title.test.js.map