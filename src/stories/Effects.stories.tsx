import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Box, { BoxProps } from '../core/Box'
import Title from '../core/Title'

export default {
    title: 'Tokens/↪ Effects',
    component: Box
} as Meta

const Template: Story<BoxProps> = args => (
    <Box {...args}>
        <Box>
            <Title variant='subtitle2' element='h3' marginRight='30px'>Shadows</Title>
            <Box
                display='inline-block'
                element='div'
                width='88px'
                height='88px'
                backgroundColor='white'
                boxShadow='0px 4px 6px rgba(33, 37, 41, 0.2)'
                borderRadius='20px'
                marginRight='30px'>
            </Box>
            <Box
                display='inline-block'
                element='div'
                width='88px'
                height='88px'
                backgroundColor='white'
                boxShadow='0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08)'
                borderRadius='20px'
                marginRight='30px'>
            </Box>
        </Box>
        <Box>
            <Title variant='subtitle2' element='h3'>Round Corners</Title>
            <Box
                display='inline-block'
                element='div'
                width='88px'
                height='88px'
                backgroundColor='black'
                borderRadius='20px'
                marginRight='30px'>
            </Box>
            <Box
                display='inline-block'
                element='div'
                width='88px'
                height='88px'
                backgroundColor='black'
                borderRadius='8px'
                marginRight='30px'>
            </Box>
        </Box>
    </Box>
)

export const Draft = Template.bind({})
Draft.args = {
    display: 'flex',
    element: 'div',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
}
