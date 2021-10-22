"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Text_1 = __importDefault(require("../Text"));
const style_1 = require("./style");
const Avatar = (props) => {
    const { src, alt, label } = props;
    const [hasError, setHasError] = (0, react_1.useState)(false);
    const firstLetter = label === null || label === void 0 ? void 0 : label.charAt(0);
    (0, react_1.useEffect)(() => {
        setHasError(false);
    }, [src]);
    if (src && !hasError) {
        return react_1.default.createElement(style_1.StyledAvatarImage, { src: src, alt: alt, onError: () => setHasError(true) });
    }
    return (react_1.default.createElement(style_1.StyledAvatarBox, { src: src, display: 'flex', alignItems: 'center', justifyContent: 'center' }, firstLetter && (react_1.default.createElement(Text_1.default, { variant: 'large', element: 'span', color: 'inherit' }, firstLetter))));
};
exports.default = Avatar;
//# sourceMappingURL=index.js.map