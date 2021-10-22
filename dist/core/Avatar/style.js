"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledAvatarImage = exports.StyledAvatarBox = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const Box_1 = __importDefault(require("../Box"));
exports.StyledAvatarBox = (0, styled_components_1.default)(Box_1.default)(({ theme }) => ({
    width: '50px',
    height: '50px',
    color: theme.colors.greyscale['100'],
    backgroundColor: theme.colors.greyscale['050'],
    borderRadius: '50%'
}));
exports.StyledAvatarImage = (0, styled_components_1.default)('img')(() => ({
    width: '50px',
    height: '50px',
    borderRadius: '50%'
}));
//# sourceMappingURL=style.js.map