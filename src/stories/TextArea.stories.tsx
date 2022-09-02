import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import TextArea from '../core/Form/TextArea'
import { TextAreaProps } from '../core/Form/TextArea/style'

export default {
    title: 'Components/TextArea',
    component: TextArea
} as Meta

const Template: Story<TextAreaProps> = args => <TextArea { ...args } />

export const Input = Template.bind({})
Input.args = {
    label: 'Text area',
    placeholder: 'Text area input...'
}
