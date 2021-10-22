"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTextField = exports.StyledBox = exports.colorUnion = void 0;
const Box_1 = __importDefault(require("../../Box"));
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const colorUnion = (props) => {
    if (props.error) {
        return 'error';
    }
    if (props.disabled) {
        return 'disabled';
    }
    return props.color;
};
exports.colorUnion = colorUnion;
exports.StyledBox = (0, styled_components_1.default)(Box_1.default)(({ theme, ...props }) => ({
    padding: theme.space['spacing-xxs'],
    paddingLeft: theme.space['spacing-xs'],
    paddingRight: theme.space['spacing-xs'],
    borderRadius: theme.radii[4],
    ...(0, styled_system_1.space)({ theme, ...props }),
    ...(0, styled_system_1.variant)({
        prop: 'color',
        variants: {
            error: {
                color: theme.colors.feedback.error['120'],
                borderColor: theme.colors.feedback.error['120']
            },
            disabled: {
                color: theme.colors.greyscale['050'],
                borderColor: theme.colors.greyscale['050']
            },
            default: {
                color: theme.colors.greyscale['000'],
                borderColor: theme.colors.greyscale['025']
            },
            primary: {
                color: theme.colors.primary['120'],
                borderColor: theme.colors.primary['120']
            },
            secondary: {
                color: theme.colors.secondary['120'],
                borderColor: theme.colors.secondary['120']
            }
        }
    })({ theme, ...props, color: (0, exports.colorUnion)(props) }),
    ...(0, styled_system_1.variant)({
        variants: {
            outlined: {
                backgroundColor: 'transparent',
                borderWidth: theme.radii[2],
                borderStyle: 'solid'
            },
            text: {
                borderWidth: theme.radii[0],
                backgroundColor: theme.colors.greyscale['075'],
                borderBottomWidth: theme.radii[2],
                borderStyle: 'solid'
            }
        }
    })({ theme, ...props })
}));
exports.StyledTextField = (0, styled_components_1.default)('input')(({ theme }) => ({
    fontFamily: theme.fonts.fontFamily,
    borderRadius: '5px',
    fontSize: theme.fontSizes[16],
    color: theme.colors.greyscale['025'],
    background: 'none',
    border: 'none',
    outline: 'none',
    flex: 1
}));
//# sourceMappingURL=style.js.map