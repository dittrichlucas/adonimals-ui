import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Toggle from '../core/Form/Toggle'

export default {
    title: 'Components/Toggle',
    component: Toggle
} as Meta

const Template: Story = args => <Toggle { ...args } />

export const Input = Template.bind({})
// Input.args = {
//     label: 'Eu sou um checkbox funcionando'
// }
