import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Checkbox from '../core/Form/Checkbox'
import { StyledCheckboxProps } from '../core/Form/Checkbox/style'

export default {
    title: 'Components/Checkbox',
    component: Checkbox
} as Meta

const Template: Story<StyledCheckboxProps> = args => <Checkbox { ...args } />

export const Input = Template.bind({})
Input.args = {
    label: 'Eu sou um checkbox funcionando'
}
