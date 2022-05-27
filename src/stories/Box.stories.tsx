import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Box, { BoxProps } from '../core/Box'

export default {
    title: 'Components/Box',
    component: Box,
    argTypes: {
        flexDirection: {
            control: {
                type: 'select',
                options: ['row', 'row-reverse', 'column', 'column-reverse']
            }
        },
        flexWrap: {
            control: {
                type: 'select',
                options: ['no-wrap', 'wrap', 'wrap-reverse']
            }
        },
        alignItems: {
            control: {
                type: 'select',
                options: [
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline',
                    'first baseline',
                    'last baseline',
                    'start',
                    'end',
                    'self-start',
                    'self-end'
                ]
            }
        },
        alignContent: {
            control: {
                type: 'select',
                options: [
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline',
                    'first baseline',
                    'last baseline',
                    'start',
                    'end',
                    'space-between',
                    'space-around',
                    'space-evenly'
                ]
            }
        },
        alignSelf: {
            control: {
                type: 'select',
                options: ['auto', 'stretch', 'flex-start', 'flex-end', 'center', 'baseline']
            }
        },
        justifyContent: {
            control: {
                type: 'select',
                options: [
                    'stretch',
                    'flex-start',
                    'flex-end',
                    'center',
                    'start',
                    'end',
                    'left',
                    'right',
                    'space-between',
                    'space-around',
                    'space-evenly'
                ]
            }
        }
    }
} as Meta

const Template: Story<BoxProps> = args => (
    <Box {...args}>
        <div style={{ margin: 15, padding: 12, backgroundColor: 'palevioletred', color: 'white' }}>Item 1</div>
        <div style={{ margin: 15, padding: 12, backgroundColor: 'palevioletred', color: 'white' }}>Item 2</div>
        <div style={{ margin: 15, padding: 12, backgroundColor: 'palevioletred', color: 'white' }}>Item 3</div>
    </Box>
)

export const BoxElement = Template.bind({})
BoxElement.args = {
    display: 'flex',
    element: 'div',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: '1px solid black'
}
