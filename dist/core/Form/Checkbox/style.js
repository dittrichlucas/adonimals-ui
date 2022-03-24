"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCheckbox = exports.HiddenCheckbox = exports.Icon = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Icon = (0, styled_components_1.default)('svg')(() => ({
    fill: 'none',
    stroke: 'white',
    strokeWidth: '2px'
}));
exports.HiddenCheckbox = (0, styled_components_1.default)('input').attrs({ type: 'chekbox' })(() => ({
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
}));
exports.StyledCheckbox = (0, styled_components_1.default)('div')(({ checked, theme }) => ({
    display: 'inline-block',
    width: theme.radii['16'],
    height: theme.radii['16'],
    background: checked ? theme.colors.primary['120'] : theme.colors.secondary['120'],
    borderRadius: theme.radii['4'],
    transition: 'all 150ms',
    [`${exports.HiddenCheckbox}:focus + &`]: {
        boxShadow: `0 0 0 ${theme.radii['4']} ${theme.colors.primary['110']}`
    },
    [`${exports.Icon}`]: {
        visibility: checked ? 'visible' : 'hidden'
    }
}));
//# sourceMappingURL=style.js.map