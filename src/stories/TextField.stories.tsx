import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import TextField from '../core/Form/TextField'
import { StyledTextFieldProps } from '../core/Form/TextField/style'

export default {
    title: 'Components/TextField',
    component: TextField
} as Meta

const Template: Story<StyledTextFieldProps> = args => <TextField { ...args } />

export const Input = Template.bind({})
Input.args = {
    label: 'Email',
    type: 'email',
    placeholder: 'Type your email...'
}
