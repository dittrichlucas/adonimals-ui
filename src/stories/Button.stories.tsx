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
                label: ['contained', 'outlined']
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary']
            }
        }
    }
} as Meta

const TemplateRow: Story<ButtonProps> = args => (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Button {...args}>Default</Button>
        {/* <Button {...args}>Hover</Button> */}
        {/* <Button {...args}>Press</Button> */}
        {/* <Button {...args}>Focus</Button> */}
        {/* <Button {...args} disabled>Disabled</Button> */}
    </div>
)

export const Default = TemplateRow.bind({})
Default.args = {
    children: 'Button',
    variant: 'outlined',
    size: 'medium'
}
