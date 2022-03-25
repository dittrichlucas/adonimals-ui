import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
import { defaultTheme } from '../src'
import logo from '../src/static/logo.svg'

const theme = create({
    brandTitle: 'adonimalsUI',
    brandImage: logo,
    fontBase: defaultTheme.fonts.fontFamily
})

addons.setConfig({
    theme
})
