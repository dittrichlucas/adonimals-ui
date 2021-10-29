"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
exports.StyledBox = (0, styled_components_1.default)(Box_1.default)((_a) => {
    var { theme } = _a, props = __rest(_a, ["theme"]);
    return (Object.assign(Object.assign(Object.assign({ padding: theme.space['spacing-xxs'], paddingLeft: theme.space['spacing-xs'], paddingRight: theme.space['spacing-xs'], borderRadius: theme.radii[4] }, (0, styled_system_1.space)(Object.assign({ theme }, props))), (0, styled_system_1.variant)({
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
    })(Object.assign(Object.assign({ theme }, props), { color: (0, exports.colorUnion)(props) }))), (0, styled_system_1.variant)({
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
    })(Object.assign({ theme }, props))));
});
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