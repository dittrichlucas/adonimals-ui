"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButton = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
exports.StyledButton = (0, styled_components_1.default)('button')(({ theme, ...props }) => ({
    fontFamily: theme.fonts.fontFamily,
    borderRadius: '5px',
    fontSize: theme.fontSizes[16],
    fontWeight: 'bold',
    cursor: 'pointer',
    borderWidth: theme.radii[2],
    borderStyle: 'solid',
    ...(0, styled_system_1.size)({ theme, ...props }),
    ...(0, styled_system_1.space)({ theme, ...props }),
    ...(0, styled_system_1.variant)({
        prop: 'size',
        variants: {
            small: {
                paddingTop: theme.space['spacing-xs'],
                paddingBottom: theme.space['spacing-xs'],
                paddingLeft: theme.space['spacing-lg'],
                paddingRight: theme.space['spacing-lg']
            },
            medium: {
                paddingTop: theme.space['spacing-sm'],
                paddingBottom: theme.space['spacing-sm'],
                paddingLeft: theme.space['spacing-xxl'],
                paddingRight: theme.space['spacing-xxl']
            },
            large: {
                paddingTop: theme.space['spacing-md'],
                paddingBottom: theme.space['spacing-md'],
                paddingLeft: theme.space['spacing-xxxl'],
                paddingRight: theme.space['spacing-xxxl']
            }
        }
    })({ theme, ...props }),
    ...(0, styled_system_1.variant)({
        variants: {
            contained: {
                color: theme.colors.secondary['080'],
                backgroundColor: theme.colors.primary['120'],
                boxShadow: '',
                borderColor: theme.colors.transparent
            },
            outlined: {
                color: theme.colors.primary['120'],
                backgroundColor: theme.colors.secondary['080'],
                boxShadow: '',
                borderColor: theme.colors.primary['120']
            },
            text: {
                color: theme.colors.primary['120'],
                backgroundColor: theme.colors.secondary['080'],
                boxShadow: '',
                borderColor: theme.colors.secondary['080']
            }
        }
    })({ theme, ...props })
}));
//# sourceMappingURL=styles.js.map