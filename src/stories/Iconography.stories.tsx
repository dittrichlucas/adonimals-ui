import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Avatar from '../core/Avatar'
import { AvatarProps } from '../core/Avatar/style'

export default {
    title: 'Tokens/↪ Iconography',
    component: Avatar
} as Meta

const Template: Story<AvatarProps> = args => <Avatar {...args} />

export const Draft = Template.bind({})
Draft.args = {
    label: 'Username'
}

/*
    - reference: https://www.toools.design/icon-library-resources-and-free-open-source-icons
    - https://feathericons.com/
    - https://github.com/icons8/line-awesome
    - https://iconsvg.xyz/
    - https://icons.mono.company/
    - https://www.notion.so/Doodlicons-519314a92ed3474093a10e44946bbb72
 */ 
