import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '../core/Button'

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Button',
    variant: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Button',
    variant: 'secondary'
}

// export const Large = Template.bind({})
// Large.args = {
//     // size: 'large',
//     children: 'Button',
// }

// export const Small = Template.bind({})
// Small.args = {
//     // size: 'small',
//     children: 'Button',
// }
