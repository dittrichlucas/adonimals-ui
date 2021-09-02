import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import TextField from '../core/Form/TextField'
import { StyledTextFieldProps } from '../core/Form/TextField/style'

export default {
    title: 'Example/TextField',
    component: TextField,
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: ['default', 'primary', 'secondary']
            }
        },
        variant: {
            control: {
                type: 'select',
                options: ['outlined', 'text']
            }
        }
    }
} as Meta

const Template: Story<StyledTextFieldProps> = (args) => <TextField {...args} />

export const Input = Template.bind({})
Input.args = {
    value: '',
    color: 'primary',
    type: 'text',
    onChange: () => {},
    placeholder: 'Email',
    variant: 'outlined',
}
