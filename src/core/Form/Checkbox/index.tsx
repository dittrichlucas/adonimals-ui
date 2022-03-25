import React from 'react'

import Box from '../../Box'
import Text from '../../Text'
import { HiddenCheckbox, Icon, StyledCheckbox, StyledCheckboxProps } from './style'

const Checkbox = (props: StyledCheckboxProps): JSX.Element => {
    const { id, label, checked, onChange } = props

    return (
        <Box display='flex' alignItems='center'>
            <HiddenCheckbox id={ id } name={ id } checked={ checked } onChange={ onChange } />
            <StyledCheckbox checked={ checked } onClick={ onChange }>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
            <Text ml='spacing-xxxs' htmlFor={ id } element='label' variant='medium' color='inherit'>
                { label }
            </Text>
        </Box>
    )
}

export default Checkbox
