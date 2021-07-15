import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import TextField from '../core/Form/TextField'
import { TextFieldProps } from '../core/Form/TextField/style'

export default {
    title: 'Example/TextField',
    component: TextField,
} as Meta

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />

export const Input = Template.bind({})
Input.args = {
    value: 'mail@mail.com',
    type: 'text',
    onChange: () => {},
    placeholder: 'Email'
}
