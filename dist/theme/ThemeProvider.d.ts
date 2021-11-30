import { PropsWithChildren } from 'react';
import defaultTheme from './defaultTheme';
declare type Props = {
    theme?: typeof defaultTheme;
};
declare const ThemeProvider: ({ theme, children }: PropsWithChildren<Props>) => JSX.Element;
export default ThemeProvider;
