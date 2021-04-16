import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Text, { TextProps } from '../core/Text'

export default {
    title: 'Example/Text',
    component: Text,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['large', 'medium', 'small']
            },
        },
        element: {
            control: {
                type: 'select',
                options: ['caption', 'label', 'p', 'span']
            },
        }
    }
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'Text',
    variant: 'large',
    element: 'p'
}
