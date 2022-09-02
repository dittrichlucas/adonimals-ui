import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Avatar from '../core/Avatar'
import { AvatarProps } from '../core/Avatar/style'

export default {
    title: 'Tokens/↪ Layout',
    component: Avatar
} as Meta

const Template: Story<AvatarProps> = args => <Avatar {...args} />

export const Draft = Template.bind({})
Draft.args = {
    label: 'Username'
}
