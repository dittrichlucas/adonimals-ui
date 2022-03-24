"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boxMap = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const createBox = (element) => (0, styled_components_1.default)(element)(props => ({
    ...(0, styled_system_1.space)(props),
    ...(0, styled_system_1.layout)(props),
    ...(0, styled_system_1.flexbox)(props),
    ...(0, styled_system_1.color)(props)
}));
const Header = createBox('header');
const Nav = createBox('nav');
const Section = createBox('section');
const Article = createBox('article');
const Aside = createBox('aside');
const Footer = createBox('footer');
const Details = createBox('details');
const Summary = createBox('summary');
const Div = createBox('div');
exports.boxMap = {
    header: Header,
    nav: Nav,
    section: Section,
    article: Article,
    aside: Aside,
    footer: Footer,
    details: Details,
    summary: Summary,
    div: Div
};
//# sourceMappingURL=style.js.map