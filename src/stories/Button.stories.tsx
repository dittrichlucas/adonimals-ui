import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '../core/Button'

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['contained', 'outlined', 'text']
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            },
        },
        backgroundColor: { control: 'color' }
    }
} as Meta

const TemplateRow: Story<ButtonProps> = (args) => (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button {...args} size='small'>Button</Button>
        <Button {...args} size='medium'>Button</Button>
        <Button {...args} size='large'>Button</Button>
    </div>
)

export const Default = TemplateRow.bind({})
Default.args = {
    children: 'Button',
    variant: 'outlined',
}
