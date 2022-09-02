import React from 'react'

import { StyledToggle, ToggleLabel, ToggleWrapper } from './styled'

const Toggle = () => {
    return (
        <ToggleWrapper>
            <StyledToggle id='checkbox'/>
            <ToggleLabel htmlFor='checkbox'></ToggleLabel>
        </ToggleWrapper>
    )
}

export default Toggle
