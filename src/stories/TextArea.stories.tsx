import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import TextArea from '../core/Form/TextArea'
import { TextAreaProps } from '../core/Form/TextArea/style'

export default {
    title: 'Example/TextArea',
    component: TextArea,
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

const Template: Story<TextAreaProps> = args => <TextArea { ...args } />

export const Input = Template.bind({})
Input.args = {
    value: '',
    color: 'primary',
    placeholder: 'Email'
}
