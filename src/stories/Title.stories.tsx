import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Title, { TitleProps } from '../core/Title'

export default {
    title: 'Typography/Title',
    component: Title,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['heading1', 'heading2', 'heading3', 'subtitle1', 'subtitle2', 'subtitle3']
            }
        },
        element: {
            control: {
                type: 'select',
                options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
            }
        }
    }
} as Meta

const Template: Story<TitleProps> = args => <Title { ...args } />

export const Heading = Template.bind({})
Heading.args = {
    children: 'Title',
    variant: 'heading1',
    element: 'h1'
}
