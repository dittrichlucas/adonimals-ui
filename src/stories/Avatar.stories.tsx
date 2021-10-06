import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Avatar from '../core/Avatar'
import { AvatarProps } from '../core/Avatar/style'

export default {
    title: 'Example/Avatar',
    component: Avatar
} as Meta

const Template: Story<AvatarProps> = args => <Avatar { ...args } />

export const Image = Template.bind({})
Image.args = {
    label: 'Username'
}
