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
exports.StyledButton = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
exports.StyledButton = (0, styled_components_1.default)('button')((_a) => {
    var { theme } = _a, props = __rest(_a, ["theme"]);
    return (Object.assign(Object.assign(Object.assign(Object.assign({ fontFamily: theme.fonts.fontFamily, borderRadius: '5px', fontSize: theme.fontSizes[16], fontWeight: 'bold', cursor: 'pointer', borderWidth: theme.radii[2], borderStyle: 'solid' }, (0, styled_system_1.size)(Object.assign({ theme }, props))), (0, styled_system_1.space)(Object.assign({ theme }, props))), (0, styled_system_1.variant)({
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
    })(Object.assign({ theme }, props))), (0, styled_system_1.variant)({
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
    })(Object.assign({ theme }, props))));
});
//# sourceMappingURL=styles.js.map