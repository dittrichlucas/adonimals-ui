import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Icon  from '../icons/Icon'
import icons from '../icons/types'

export default {
    title: 'Tokens/↪ Iconography',
    component: Icon,
    argTypes: {
        name: {
            control: {
                type: 'select',
                options: Object.keys(icons)
            }
        }
    }
} as Meta

const Template: Story = ({ name, color, size }) => <Icon  name={name} color={color} size={size} />

export const Draft = Template.bind({})
Draft.args = {
    size: 24,
    color: 'grey',
    name: Object.keys(icons)[0]
}

/*
    - reference: https://www.toools.design/icon-library-resources-and-free-open-source-icons
    - https://feathericons.com/
    - https://github.com/icons8/line-awesome
    - https://iconsvg.xyz/
    - https://icons.mono.company/
    - https://www.notion.so/Doodlicons-519314a92ed3474093a10e44946bbb72
 */ 
