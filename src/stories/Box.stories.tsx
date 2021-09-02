import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Box, { BoxProps } from '../core/Box'

export default {
    title: 'Example/Box',
    component: Box,
    argTypes: {
        flexDirection: {
            control: {
                type: 'select',
                options: ['row', 'row-reverse', 'column', 'column-reverse']
            }
        },
        alignItems: {
            control: {
                type: 'select',
                options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'first baseline', 'last baseline', 'start', 'end', 'self-start', 'self-end']
            }
        },
    }
} as Meta

const Template: Story<BoxProps> = (args) => (
  <Box {...args}>
    <div style={{ padding: 12, backgroundColor: 'inherit', color: 'white' }}>Item 1</div>
    <div style={{ padding: 12, backgroundColor: 'inherit', color: 'white' }}>Item 2</div>
    <div style={{ padding: 12, backgroundColor: 'inherit', color: 'white' }}>Item 3</div>
  </Box>
)

export const Heading = Template.bind({})
Heading.args = {
    display: 'flex',
    element: 'div',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'palevioletred'
}
